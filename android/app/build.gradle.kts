plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

// The web app (index.html and its files at the top of the repository) is copied into the APK at build
// time, so the page stays the single source and the Android code only shows it.
val webRoot = rootDir.parentFile
val copyWeb by tasks.registering(Copy::class) {
    from(webRoot) { include("index.html", "manifest.webmanifest", "sw.js", "icons/**") }
    into(layout.buildDirectory.dir("web/www"))
}
val copyIcon by tasks.registering(Copy::class) {
    from(projectDir.resolve("launcher-icon.png")) // Android-only icon: New York at dusk (the PWA keeps icons/icon-512.png)
    into(layout.buildDirectory.dir("webres/mipmap-xxxhdpi"))
    rename { "ic_launcher.png" }
}
// The native music engine (native/lofi.c) for each kind of processor, built with the NDK's own clang.
val buildLofi by tasks.registering {
    val src = webRoot.resolve("native/lofi.c")
    val out = layout.buildDirectory.dir("jniLibs")
    inputs.file(src)
    outputs.dir(out)
    doLast {
        val os = System.getProperty("os.name").lowercase()
        val host = if ("mac" in os) "darwin-x86_64" else if ("win" in os) "windows-x86_64" else "linux-x86_64"
        val clang = android.ndkDirectory.resolve("toolchains/llvm/prebuilt/$host/bin/clang" + if ("win" in os) ".exe" else "")
        val targets = mapOf(
            "arm64-v8a" to "aarch64-linux-android26",
            "armeabi-v7a" to "armv7a-linux-androideabi26",
            "x86_64" to "x86_64-linux-android26",
        )
        for ((abi, target) in targets) {
            val lib = out.get().dir(abi).asFile.apply { mkdirs() }.resolve("liblofi.so")
            val cmd = listOf(
                clang.path, "--target=$target", "-O2", "-shared", "-fPIC", "-s", "-Wall",
                "-Wl,-z,max-page-size=16384", "-o", lib.path, src.path, "-lm",
            )
            val p = ProcessBuilder(cmd).redirectErrorStream(true).start()
            val log = p.inputStream.bufferedReader().readText()
            if (p.waitFor() != 0) throw GradleException("lofi.c for $abi:\n$log")
        }
    }
}
tasks.named("preBuild") { dependsOn(copyWeb, copyIcon, buildLofi) }

android {
    namespace = "io.github.utopick.clockscapes"
    compileSdk = 35
    ndkVersion = "27.2.12479018"

    defaultConfig {
        applicationId = "io.github.utopick.clockscapes"
        minSdk = 26
        targetSdk = 35
        versionCode = 6
        versionName = "1.3.0"
    }

    // Two builds of the same app. "weather" is the real one. "navtest" is a test build with its own name and
    // id, so both can be installed at once: it also says it is a navigation app and accepts older car
    // screens, to find out why Android Auto doesn't list the weather build when it's sideloaded.
    flavorDimensions += "car"
    productFlavors {
        create("weather") {
            dimension = "car"
            manifestPlaceholders["appLabel"] = "Clockscapes"
            manifestPlaceholders["minCarApi"] = "7"
        }
        create("navtest") {
            dimension = "car"
            applicationIdSuffix = ".navtest"
            versionNameSuffix = "-navtest"
            manifestPlaceholders["appLabel"] = "Clockscapes Nav test"
            manifestPlaceholders["minCarApi"] = "1"
        }
    }

    signingConfigs {
        // A test key kept in the repository, so every build from GitHub Actions can update the last one
        // without uninstalling (which would wipe the settings). It is public: never use it for a release.
        getByName("debug") {
            storeFile = file("../debug.p12")
            storeType = "pkcs12"
            storePassword = "android"
            keyAlias = "androiddebugkey"
            keyPassword = "android"
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }

    sourceSets["main"].assets.srcDir(layout.buildDirectory.dir("web"))
    sourceSets["main"].res.srcDir(layout.buildDirectory.dir("webres"))
    sourceSets["main"].jniLibs.srcDir(layout.buildDirectory.dir("jniLibs"))
}

dependencies {
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("androidx.car.app:app:1.7.0")
}
