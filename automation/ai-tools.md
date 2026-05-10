# AI Tools Review And Recommendations

Last reviewed: 2026-05-10.

AI coding tools change quickly. Re-check official docs, pricing, model availability, and enterprise data policies before purchasing or standardizing.

## Recommended Default Stack

For Symphony, use this practical stack:

1. Codex for repo-aware engineering work, code review, multi-file implementation, skills, and automation-oriented tasks.
2. GitHub Copilot for everyday IDE autocomplete, GitHub-native developer assistance, and team familiarity.
3. Claude Code as a strong terminal-based second opinion for planning, debugging, and complex refactors.
4. Cursor or Windsurf when a dedicated AI IDE is preferred over the existing editor.
5. Gemini Code Assist or Amazon Q Developer when the team is already standardized on Google Cloud or AWS.

## Comparison

| Tool | Best fit | Strengths | Watchouts |
| --- | --- | --- | --- |
| OpenAI Codex | Agentic coding, reviews, repo tasks, skills, automations | Cloud and local workflows, multi-agent work, strong review and implementation flow | Verify plan access, repo permissions, and network/tool permissions per workspace |
| GitHub Copilot | Daily IDE assistance and GitHub-native teams | Broad IDE support, GitHub integration, chat, autocomplete, agent features | Quality depends on context and model selection; keep attribution and policy settings explicit |
| Claude Code | Terminal-first agentic development | Strong codebase Q&A, implementation, debugging, and natural language workflows | Requires clear permission boundaries for commands and file edits |
| Cursor | AI IDE for multi-file edits and agent workflows | Agent, ask, and custom modes; strong codebase editing experience | Dedicated IDE adoption cost; verify behavior on large repos |
| Windsurf Cascade | Flow-aware AI IDE workflows | Code/chat modes, planning, terminal context, MCP, workflows | Dedicated IDE adoption cost; privacy and context rules should be configured |
| Gemini Code Assist | Google Cloud and Android Studio ecosystems | IDE support, completions, chat, agentic assistance, source citations in some cases | Best value when already using Google Cloud tooling |
| JetBrains AI Assistant | JetBrains-heavy teams | Native IDE integration, chat, code insights, agents, documentation/test help | Tied to JetBrains ecosystem and subscription model |
| Sourcegraph Cody | Large codebases and code search | Code graph and enterprise code context across repositories | Strongest when Sourcegraph is already deployed |
| Amazon Q Developer | AWS-centered teams | AWS-aware assistant, IDE help, feature development agent, Bedrock-backed service | Best fit when AWS is the main platform; review extension and permission posture carefully |

## Selection Rules

- Use one primary coding agent and one backup reviewer to reduce conflicting edits.
- Prefer tools that can inspect the real repo and run the existing test commands.
- Use enterprise controls when proprietary code, customer data, or secrets are present.
- Keep destructive shell commands approval-gated.
- Store credentials only in approved secret managers.
- Require human review before production merge or deployment.

## Current Recommendations By Use Case

| Use case | Recommendation |
| --- | --- |
| End-to-end feature implementation | Codex |
| Terminal pair programming | Claude Code or Codex CLI |
| IDE autocomplete | GitHub Copilot |
| AI-first IDE | Cursor or Windsurf |
| Google Cloud or Android-heavy work | Gemini Code Assist |
| AWS-heavy work | Amazon Q Developer |
| Large enterprise code search | Sourcegraph Cody |
| JetBrains-native development | JetBrains AI Assistant |

## Source Links

- OpenAI Codex: https://openai.com/codex
- OpenAI Codex announcement: https://openai.com/index/introducing-codex/
- OpenAI Codex help: https://help.openai.com/en/articles/11369540
- GitHub Copilot docs: https://docs.github.com/en/copilot
- Anthropic Claude Code docs: https://docs.anthropic.com/en/docs/claude-code/overview
- Cursor modes: https://docs.cursor.com/agent/modes
- Windsurf Cascade docs: https://docs.windsurf.com/windsurf/cascade/cascade
- Gemini Code Assist overview: https://docs.cloud.google.com/gemini/docs/codeassist/overview
- Gemini Code Assist code features: https://docs.cloud.google.com/gemini/docs/codeassist/code-overview
- JetBrains AI Assistant: https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html
- Sourcegraph Cody docs: https://sourcegraph.com/docs/cody
- Amazon Q Developer docs: https://aws.amazon.com/documentation-overview/q-developer/
