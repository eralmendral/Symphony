# Symphony iOS App Boilerplate

A simple iOS app boilerplate with Hello World functionality built with SwiftUI.

## Features

- SwiftUI framework
- Modern iOS design patterns
- Responsive layout for iPhone and iPad
- Animated UI elements
- Clean architecture
- Xcode project configuration

## Prerequisites

- macOS with Xcode 15.0+
- iOS 17.0+ deployment target
- Swift 5.9+

## Quick Start

### Local Development

1. Open the project in Xcode:
   ```bash
   open SymphonyApp.xcodeproj
   ```

2. Select your target device or simulator

3. Build and run the project (⌘+R)

### Simulator Testing

- iPhone 15 Pro (or any recent iPhone)
- iPad Pro (for iPad testing)
- Various screen sizes for responsive testing

## Project Structure

```
SymphonyApp/
├── SymphonyAppApp.swift      # App entry point
├── ContentView.swift         # Main view
├── Assets.xcassets/          # App assets
└── Preview Content/          # SwiftUI previews
```

## Features

- **SwiftUI**: Modern declarative UI framework
- **Responsive Design**: Works on iPhone and iPad
- **Animations**: Smooth UI animations and transitions
- **Accessibility**: Built with accessibility in mind
- **Dark Mode**: Automatic dark mode support

## Development Notes

- iOS deployment target: 17.0+
- Swift version: 5.9+
- Xcode version: 15.0+

## Building for Production

1. Select "Any iOS Device" as target
2. Product → Archive
3. Follow App Store Connect guidelines

## Docker Support

Note: iOS development requires macOS with Xcode. The Dockerfile provided is for development environment setup only and cannot build iOS apps directly.

```bash
# Build development environment
docker build -t symphony-ios-dev .

# Run development container
docker run -it symphony-ios-dev
``` 