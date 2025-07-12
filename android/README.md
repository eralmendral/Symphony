# Symphony Android App Boilerplate

A simple Android app boilerplate with Hello World functionality built with Jetpack Compose and Kotlin.

## Features

- Jetpack Compose UI framework
- Material Design 3
- Kotlin programming language
- Modern Android architecture
- Responsive design
- Animated UI elements
- Dark mode support

## Prerequisites

- Android Studio Hedgehog (2023.1.1) or later
- Android SDK 34
- Kotlin 1.9.0+
- Minimum SDK: 24 (Android 7.0)
- Target SDK: 34 (Android 14)

## Quick Start

### Local Development

1. Open the project in Android Studio:
   ```bash
   # Open Android Studio and select "Open an existing project"
   # Navigate to the android folder and select it
   ```

2. Sync the project with Gradle files

3. Run the app on an emulator or device

### Building the App

```bash
# Build debug APK
./gradlew assembleDebug

# Build release APK
./gradlew assembleRelease

# Run tests
./gradlew test
```

## Project Structure

```
app/
├── src/main/
│   ├── java/com/symphony/androidapp/
│   │   ├── MainActivity.kt           # Main activity
│   │   ├── MainScreen.kt             # Main screen composable
│   │   └── ui/theme/                 # Theme configuration
│   ├── res/                          # Resources
│   └── AndroidManifest.xml           # App manifest
├── build.gradle.kts                  # App build configuration
└── proguard-rules.pro               # ProGuard rules
```

## Features

- **Jetpack Compose**: Modern declarative UI framework
- **Material Design 3**: Latest Material Design components
- **Kotlin**: Modern programming language
- **Responsive Design**: Works on phones and tablets
- **Animations**: Smooth UI animations and transitions
- **Dark Mode**: Automatic dark mode support
- **Accessibility**: Built with accessibility in mind

## Development Notes

- Uses Kotlin DSL for Gradle configuration
- Implements Material Design 3 theming
- Supports both light and dark themes
- Includes proper resource management
- Follows Android best practices

## Building for Production

1. Update version information in `build.gradle.kts`
2. Configure signing keys
3. Build release APK or AAB
4. Test thoroughly on different devices
5. Upload to Google Play Console

## Docker Support

Note: Android development typically requires Android Studio. The Dockerfile provided is for development environment setup only.

```bash
# Build development environment
docker build -t symphony-android-dev .

# Run development container
docker run -it symphony-android-dev
```

## Testing

- Unit tests with JUnit
- UI tests with Espresso
- Compose testing support
- Automated testing pipeline ready 