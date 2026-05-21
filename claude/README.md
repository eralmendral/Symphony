****# Team Work Environment Setup for Claude E2E Testing

This guide sets up a macOS developer machine so Claude Code can inspect the app, use Playwright MCP to explore browser flows, read Confluence context when needed, and create committed Playwright end-to-end tests.

## Prerequisites

- macOS with `zsh`
- Node.js 18 or newer
- npm available on your `PATH`
- Access to the target app repository
- Access to the team's Atlassian Cloud site

Check your local tools:

```bash
node --version
npm --version
```

## 1. Install Claude Code

Install Claude Code with npm:

```bash
npm install -g @anthropic-ai/claude-code
```

Do not use `sudo` for the install. If npm reports global permission issues, fix the npm global directory or use your team-approved Node version manager.

Verify the install:

```bash
claude --version
claude doctor
```

From the app repository root, start Claude Code:

```bash
claude
```

Complete the authentication flow when prompted.

Reference: [Claude Code setup](https://docs.anthropic.com/en/docs/claude-code/getting-started)

## 2. Add Playwright MCP

Playwright MCP lets Claude control a browser through the Model Context Protocol. Add it to Claude Code:

```bash
claude mcp add playwright -- npx @playwright/mcp@latest
```

The `--` separates Claude's MCP options from the command Claude will run for the MCP server.

Verify the server is registered:

```bash
claude mcp list
```

Then open Claude Code from the project root and run:

```text
/mcp
```

Confirm the `playwright` server is listed and enabled.

Run a browser smoke test in Claude:

```text
Use Playwright MCP to navigate to https://demo.playwright.dev/todomvc and add a todo item named "verify mcp setup".
```

Reference: [Playwright MCP getting started](https://playwright.dev/docs/getting-started-mcp)

## 3. Create an Atlassian API Token

Create a token from your Atlassian account:

1. Go to <https://id.atlassian.com/manage-profile/security/api-tokens>.
2. Select **Create API token with scopes** when available.
3. Name the token for this use case, such as `claude-confluence-read`.
4. Choose an expiration date.
5. Select the minimum Confluence read scopes your team requires. For page reads, Atlassian documents `read:page:confluence`.
6. Copy the token once and store it in your password manager.

Add the token to your local shell environment:

```bash
export ATLASSIAN_EMAIL="name@company.com"
export ATLASSIAN_API_TOKEN="paste-token-here"
export ATLASSIAN_SITE_URL="https://company.atlassian.net"
```

For persistent local setup, add the exports to `~/.zshrc` or your team-approved secret manager. Do not commit tokens, paste them into issues, or store them in project files.

Verify the variables are present without printing the token:

```bash
test -n "$ATLASSIAN_EMAIL" && echo "ATLASSIAN_EMAIL set"
test -n "$ATLASSIAN_API_TOKEN" && echo "ATLASSIAN_API_TOKEN set"
test -n "$ATLASSIAN_SITE_URL" && echo "ATLASSIAN_SITE_URL set"
```

Reference: [Atlassian API tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)
Reference: [Confluence Cloud page API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)

## 4. Confirm Project Claude Assets

The app repository should provide Claude skills or commands for E2E work under a project-local Claude directory, such as:

```text
.claude/skills/
.claude/commands/
```

For a Playwright project that does not yet have Claude agent definitions, generate the official Playwright Test Agents in the app repository:

```bash
npx playwright init-agents --loop=claude
```

This creates Playwright planner, generator, and healer instructions for Claude Code. Commit those generated project assets after review so every engineer uses the same workflow.

From the app repository root, ask Claude:

```text
Inspect the project-local Claude skills and commands. Tell me which one should be used to plan and generate Playwright end-to-end tests. Do not edit files yet.
```

If the repository does not include E2E skills or commands yet and you are not ready to add Playwright Test Agents, use the standard workflow below and ask Claude to follow the project's existing Playwright conventions directly.

Reference: [Playwright Test Agents](https://playwright.dev/docs/test-agents)

## 5. Prepare the App Under Test

Start the app locally in one terminal using the repository's normal dev command.

In the terminal where you will run Claude, set the app URL:

```bash
export APP_BASE_URL="http://localhost:<port>"
```

Verify the app responds:

```bash
curl -I "$APP_BASE_URL"
```

If the app requires seeded data, test users, feature flags, or local services, start those before asking Claude to generate tests.

## 6. Generate E2E Tests with Claude

Run this workflow from the app repository root in Claude Code.

### Step 1: Inspect the test structure

```text
Inspect this repository's Playwright setup, package scripts, and existing test conventions. Identify where new end-to-end tests should be added and which command should run the focused test. Do not edit files yet.
```

Expected result: Claude reports the Playwright config, test directory, naming pattern, and the test command it will use.

### Step 2: Load product context

If the flow is documented in Confluence, provide the page URL and ask Claude to use the Atlassian environment variables:

```text
Read the Confluence page at <CONFLUENCE_PAGE_URL> using my local Atlassian environment variables. Do not print the token. Extract the user flow, acceptance criteria, required test data, and edge cases relevant to E2E coverage. Do not edit files yet.
```

If there is no Confluence page, provide the flow directly:

```text
The flow to test is: <describe the user journey>. The expected outcome is: <describe the assertion>. Use APP_BASE_URL as the target app URL.
```

### Step 3: Explore the flow with Playwright MCP

```text
Use Playwright MCP to open $APP_BASE_URL and manually explore the target flow. Capture stable locators, required setup steps, network or console errors, and any authentication requirements. Do not create tests until you summarize what you observed.
```

Expected result: Claude uses the `playwright` MCP server, navigates the app, and summarizes the route, selectors, and assertions it plans to use.

### Step 4: Create the tests

```text
Create Playwright end-to-end tests for the explored flow using the repository's existing conventions. Keep the tests focused on user-visible behavior, use resilient locators, and avoid hard-coded sleeps. Add only the files needed for this coverage.
```

Expected result: Claude adds or updates Playwright test files in the correct test directory.

### Step 5: Run and repair the focused test

```text
Run the focused Playwright test command you identified earlier. If it fails, inspect the failure, use Playwright traces or MCP as needed, and make the smallest fix that keeps the test aligned with user behavior.
```

Expected result: the focused test passes locally.

### Step 6: Review the diff

```text
Show me the git diff summary and explain the test coverage added, the command that passed, and any known limitations.
```

Successful output is committed-ready Playwright E2E coverage that passes locally.

## Troubleshooting

### Claude cannot see Playwright MCP

Run:

```bash
claude mcp list
```

If `playwright` is missing, add it again:

```bash
claude mcp add playwright -- npx @playwright/mcp@latest
```

Then restart Claude Code and check `/mcp`.

### Browser does not open or hangs

Try running Playwright MCP headless:

```bash
claude mcp add playwright-headless -- npx @playwright/mcp@latest --headless
```

Use the `playwright-headless` server only when the normal headed browser is not practical.

### Atlassian token fails

Confirm:

- `ATLASSIAN_EMAIL` matches the account that created the token.
- `ATLASSIAN_SITE_URL` matches the team's Atlassian Cloud site.
- The token has not expired.
- The token has the Confluence read scopes needed by the workflow.

Create a new token if the current one is expired or was copied incorrectly. Atlassian does not show the token value again after creation.

### Tests pass locally but fail in CI

Ask Claude to compare local and CI configuration:

```text
Compare the local Playwright command with the CI Playwright command. Identify differences in base URL, browser, environment variables, authentication, data setup, retries, and worker count. Propose the smallest change needed for consistent behavior.
```

## Security Rules

- Never commit API tokens, cookies, storage state files with real sessions, or `.env` files containing secrets.
- Prefer read-only Atlassian scopes for documentation lookup.
- Rotate Atlassian tokens on the team's normal secret rotation schedule or immediately after suspected exposure.
- Use test accounts and disposable test data for E2E flows.
