# The one that will probably replace me, in a press of a button

Symphony is a complete application boilerplate and delivery workspace. It includes starter apps for backend, web, website, mobile, and desktop development, plus engineering skills and automation playbooks for managing work from idea intake through release.

## Project Structure

```text
Symphony/
|-- server/          # Go HTTP API boilerplate
|-- webapp/          # Angular web application
|-- website/         # Astro static website
|-- ios/             # SwiftUI iOS app
|-- android/         # Kotlin / Jetpack Compose Android app
|-- desktop/         # Tauri / Vue desktop app
|-- skills/          # Codex-style engineering skills
|-- automation/      # SDLC, Agile, Jira, GitHub, CI/CD, and AI tool playbooks
`-- README.md
```

## Quick Start

Each app can be used independently.

### Server

```bash
cd server
go run main.go
```

Runs on `http://localhost:8080`.

### Web App

```bash
cd webapp
npm install
npm start
```

Runs on `http://localhost:4200`.

### Website

```bash
cd website
npm install
npm run dev
```

Runs on `http://localhost:4321`.

### Desktop

```bash
cd desktop
npm install
npm run tauri dev
```

Uses Tauri, Vue, Vite, and Rust.

### iOS

```bash
cd ios
open SymphonyApp.xcodeproj
```

Build and run from Xcode.

### Android

```bash
cd android
./gradlew assembleDebug
```

Open the `android/` folder in Android Studio for normal development.

## Engineering Skills

The `skills/` directory contains Codex-style `SKILL.md` files that guide AI-assisted engineering work:

- `software-development`
- `conventional-commits`
- `code-review`
- `testing-quality`
- `security-review`
- `ci-cd-release`
- `agile-delivery`
- `jira-workflow`
- `technical-documentation`
- `frontend-ui-ux`
- `backend-api`
- `devops-operations`
- `ai-tools-selection`

Use these skills to standardize how agents plan, implement, review, test, document, and release work.

## Automation

The `automation/` directory is the delivery system for the whole project:

- [SDLC](./automation/sdlc.md)
- [Agile](./automation/agile.md)
- [Jira](./automation/jira.md)
- [GitHub workflow](./automation/github.md)
- [CI/CD](./automation/ci-cd.md)
- [Commit conventions](./automation/commit-conventions.md)
- [AI tools review](./automation/ai-tools.md)
- [GitHub learning resources](./automation/github-resources.md)
- [Templates](./automation/templates/)

It covers intake, discovery, sprint planning, story points, Jira issue structure, GitHub branch and PR flow, code review, CI/CD gates, releases, incidents, retrospectives, and AI tool selection.

## Recommended Workflow

1. Capture the idea or bug in Jira using an automation template.
2. Refine the issue with acceptance criteria and story points.
3. Create a GitHub branch linked to the issue.
4. Build the change in the relevant app directory.
5. Use the skills for implementation, testing, review, security, docs, and release checks.
6. Open a pull request with verification notes.
7. Merge only after review and required checks pass.
8. Release with the checklist in `automation/templates/release-checklist.md`.
9. Track follow-ups, incidents, and retrospectives in `automation/`.

## Docker Support

The app directories include Dockerfiles where useful:

```bash
docker build -t symphony-server ./server
docker build -t symphony-webapp ./webapp
docker build -t symphony-website ./website
```

Mobile and desktop Docker support is limited by platform-specific build requirements.

## Learning Resources

Start with:

- [GitHub Resources](./automation/github-resources.md)
- [AI Tools Review](./automation/ai-tools.md)
- [Jira Workflow](./automation/jira.md)
- [Agile Delivery](./automation/agile.md)

The AI tool recommendations are dated and should be reviewed before purchase, rollout, or policy changes.

## Status

This repository is a boilerplate and process workspace. The apps are intentionally minimal, and the automation layer is documentation-first until executable CI/CD or Jira API integration is explicitly added.
