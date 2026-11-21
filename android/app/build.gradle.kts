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
    from(webRoot.resolve("icons/icon-512.png"))
    into(layout.buildDirectory.dir("webres/mipmap-xxxhdpi"))
    rename { "ic_launcher.png" }
}
tasks.named("preBuild") { dependsOn(copyWeb, copyIcon) }

android {
    namespace = "io.github.utopick.clockscapes"
    compileSdk = 35

    defaultConfig {
        applicationId = "io.github.utopick.clockscapes"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "0.1"
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
}

dependencies {
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("androidx.car.app:app:1.7.0")
}
