# Symphony Desktop App Boilerplate

A simple desktop app boilerplate with Hello World functionality built with Tauri and Vue.js.

## Features

- Tauri framework for cross-platform desktop apps
- Vue.js 3 with Composition API
- Modern UI with dark mode support
- Responsive design
- Rust backend with Tauri commands
- Hot reload development
- Native system integration

## Prerequisites

- Node.js 18+
- Rust 1.70+
- Platform-specific dependencies:
  - **Windows**: Microsoft Visual Studio C++ Build Tools
  - **macOS**: Xcode Command Line Tools
  - **Linux**: Build essentials and WebKit2GTK

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run tauri dev

# Build for production
npm run tauri build
```

### Using Docker

```bash
# Build the Docker image
docker build -t symphony-desktop .

# Run the container (requires X11 forwarding on Linux)
docker run -it --rm \
  -e DISPLAY=$DISPLAY \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  symphony-desktop
```

## Project Structure

```
desktop/
├── src/                    # Vue.js frontend
│   ├── App.vue            # Main component
│   └── main.js            # Entry point
├── src-tauri/             # Rust backend
│   ├── src/main.rs        # Main Rust file
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
├── package.json           # Node.js dependencies
└── vite.config.js         # Vite configuration
```

## Features

- **Tauri**: Cross-platform desktop framework
- **Vue.js 3**: Progressive JavaScript framework
- **Rust Backend**: High-performance system integration
- **Modern UI**: Beautiful design with animations
- **Dark Mode**: Automatic theme switching
- **Responsive**: Works on different screen sizes
- **Hot Reload**: Fast development experience

## Development

The app runs on `http://localhost:1420` in development mode.

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build Vue.js app
- `npm run tauri dev` - Start Tauri development
- `npm run tauri build` - Build desktop app

## Building for Production

### Windows
```bash
npm run tauri build
# Output: src-tauri/target/release/bundle/msi/
```

### macOS
```bash
npm run tauri build
# Output: src-tauri/target/release/bundle/dmg/
```

### Linux
```bash
npm run tauri build
# Output: src-tauri/target/release/bundle/appimage/
```

## Tauri Commands

The app includes a sample Rust command:

```rust
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
```

Call it from Vue.js:

```javascript
import { invoke } from '@tauri-apps/api/tauri'
const message = await invoke('greet', { name: 'World' })
```

## Configuration

Edit `src-tauri/tauri.conf.json` to customize:
- App metadata
- Window settings
- Security policies
- Build options
- Bundle settings

## Troubleshooting

### Common Issues

1. **Build fails on Windows**: Install Visual Studio Build Tools
2. **Build fails on macOS**: Install Xcode Command Line Tools
3. **Build fails on Linux**: Install WebKit2GTK development packages

### Platform-Specific Setup

- **Windows**: `winget install Microsoft.VisualStudio.2022.BuildTools`
- **macOS**: `xcode-select --install`
- **Linux**: `sudo apt install webkit2gtk-4.0-dev`

## Docker Support

The Dockerfile provides a complete build environment for cross-platform compilation.

Note: Running GUI apps in Docker requires X11 forwarding on Linux systems. 