const { pathToFileURL } = require("url");
const path = require("path");
const { chromium } = require("playwright");

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const htmlUrl = pathToFileURL(path.resolve(__dirname, "index.html")).href;
const screenshotPath = "/tmp/cv-playwright-validation.png";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function textOf(locator) {
  return (await locator.textContent()).replace(/\s+/g, " ").trim();
}

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath,
    args: ["--disable-gpu", "--no-first-run"]
  });

  const context = await browser.newContext({
    viewport: { width: 1000, height: 1800 },
    deviceScaleFactor: 1
  });

  await context.addInitScript(() => {
    localStorage.clear();
  });

  const page = await context.newPage();
  const browserIssues = [];

  page.on("pageerror", (error) => browserIssues.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") {
      browserIssues.push(`console error: ${message.text()}`);
    }
  });

  await page.goto(htmlUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".editor-toolbar");

  assert(await page.locator(".editor-toolbar").isVisible(), "Editor toolbar is not visible");
  assert(await page.locator("body.editing").count() === 1, "Page did not start in editing mode");
  assert(await page.locator("[contenteditable='true']").count() > 80, "Expected the CV content to be broadly editable");

  await page.locator(".role").fill("Dynamic Software Developer / IT Consultant");
  assert((await textOf(page.locator(".role"))).includes("Dynamic Software Developer"), "Inline role edit failed");

  await page.locator(".tags .editor-add", { hasText: "+ Skill" }).click();
  await page.locator(".tags .tag").last().fill("Dynamic Automation");
  assert(await page.locator(".tag", { hasText: "Dynamic Automation" }).count() === 1, "Skill add/edit failed");

  await page.locator(".contact-card .editor-add", { hasText: "+ Contact" }).click();
  const lastContact = page.locator(".contact-card .contact-item").last();
  await lastContact.locator(".contact-icon").fill("site");
  await lastContact.locator("span").last().fill("dynamic.example.com");
  assert((await textOf(lastContact)).includes("dynamic.example.com"), "Contact add/edit failed");

  const initialSectionCount = await page.locator(".section").count();
  await page.locator(".section").first().locator("button[title='Duplicate section']").click();
  assert(await page.locator(".section").count() === initialSectionCount + 1, "Section duplicate failed");

  const initialEntryCount = await page.locator(".entry").count();
  await page.locator(".entry").first().locator("button[title='Duplicate item']").click();
  assert(await page.locator(".entry").count() === initialEntryCount + 1, "Entry duplicate failed");

  const duplicatedEntry = page.locator(".entry").nth(1);
  await duplicatedEntry.locator(".bullets > li").first().locator("button[title='Add nested bullet']").click();
  await duplicatedEntry.locator(".nested-bullets > li").last().fill("Nested validation bullet");
  assert(await duplicatedEntry.locator(".nested-bullets > li", { hasText: "Nested validation bullet" }).count() === 1, "Nested bullet add/edit failed");

  await duplicatedEntry.locator(".nested-bullets > li", { hasText: "Nested validation bullet" }).locator("button[title='Add nested bullet']").click();
  await duplicatedEntry.locator(".nested-bullets .nested-bullets > li").last().fill("Second-level nested validation bullet");
  assert(await duplicatedEntry.locator(".nested-bullets .nested-bullets > li", { hasText: "Second-level nested validation bullet" }).count() === 1, "Second-level nested bullet add/edit failed");

  await duplicatedEntry.locator(".bullets .editor-add", { hasText: "+ Bullet" }).first().click();
  await duplicatedEntry.locator(".bullets > li").last().fill("Top-level validation bullet");
  assert(await duplicatedEntry.locator(".bullets > li", { hasText: "Top-level validation bullet" }).count() === 1, "Top-level bullet add/edit failed");

  await page.locator(".tech-grid .editor-add", { hasText: "+ Skill row" }).click();
  const lastTech = page.locator(".tech-row").last();
  await lastTech.locator("strong").fill("Validation Skill");
  await lastTech.locator("span").fill("Nested dynamic row content");
  assert((await textOf(lastTech)).includes("Validation Skill"), "Technical skill row add/edit failed");

  await page.locator(".cert-grid .editor-add", { hasText: "+ Certificate" }).click();
  const lastCert = page.locator(".certificate").last();
  await lastCert.locator("h3").fill("VALIDATION CERTIFICATE");
  await lastCert.locator(".date").fill("(04/2026 - Present)");
  assert((await textOf(lastCert)).includes("VALIDATION CERTIFICATE"), "Certificate add/edit failed");

  page.once("dialog", async (dialog) => {
    assert(dialog.type() === "prompt", "Expected link editor to open a prompt");
    await dialog.accept("https://example.com/updated-link");
  });
  await page.locator("a.small-link").first().dblclick();
  assert((await page.locator("a.small-link").first().getAttribute("href")) === "https://example.com/updated-link", "Link URL edit failed");

  page.once("dialog", async (dialog) => {
    assert(dialog.type() === "prompt", "Expected avatar editor to open a prompt");
    await dialog.accept("assets/profile.jpg");
  });
  await page.locator(".avatar").click();
  assert((await page.locator(".avatar").getAttribute("src")) === "assets/profile.jpg", "Avatar path edit failed");

  await page.waitForTimeout(500);
  const savedHtml = await page.evaluate(() => localStorage.getItem("editable-cv-html-v1") || "");
  assert(savedHtml.includes("Dynamic Automation"), "Autosaved HTML does not include added skill");
  assert(savedHtml.includes("Second-level nested validation bullet"), "Autosaved HTML does not include nested content");
  assert(!savedHtml.includes("data-editor-control"), "Autosaved HTML should not include editor controls");

  const layoutIssues = await page.evaluate(() => {
    const issues = [];
    const selector = [
      ".section",
      ".section-heading",
      ".contact-card",
      ".contact-item",
      ".tag",
      ".entry",
      ".bullets > li",
      ".tech-row",
      ".project",
      ".certificate",
      ".editor-add"
    ].join(",");

    document.querySelectorAll(".sheet").forEach((sheet, sheetIndex) => {
      const sheetRect = sheet.getBoundingClientRect();
      sheet.querySelectorAll(selector).forEach((element, elementIndex) => {
        const style = getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden") return;
        const rect = element.getBoundingClientRect();
        const label = `${element.className || element.tagName} on sheet ${sheetIndex + 1}, item ${elementIndex + 1}`;
        if (rect.width < 1 || rect.height < 1) {
          issues.push(`${label} has no visible box`);
        }
        if (rect.left < sheetRect.left - 2) {
          issues.push(`${label} overflows left edge`);
        }
        if (rect.right > sheetRect.right + 2) {
          issues.push(`${label} overflows right edge`);
        }
        if (rect.top < sheetRect.top - 24) {
          issues.push(`${label} is positioned above its sheet`);
        }
        if (rect.bottom > sheetRect.bottom + 24) {
          issues.push(`${label} is positioned below its sheet`);
        }
      });
    });
    return issues;
  });

  assert(layoutIssues.length === 0, `Layout positioning issues:\n${layoutIssues.join("\n")}`);

  await page.emulateMedia({ media: "print" });
  const printState = await page.evaluate(() => ({
    toolbar: getComputedStyle(document.querySelector(".editor-toolbar")).display,
    firstInlineControl: getComputedStyle(document.querySelector("[data-editor-control]")).display
  }));
  assert(printState.toolbar === "none", "Editor toolbar is visible in print media");
  assert(printState.firstInlineControl === "none", "Editor controls are visible in print media");

  await page.emulateMedia({ media: "screen" });
  await page.screenshot({ path: screenshotPath, fullPage: true });

  assert(browserIssues.length === 0, `Browser issues:\n${browserIssues.join("\n")}`);
  await browser.close();

  console.log("Playwright validation passed");
  console.log(`Screenshot: ${screenshotPath}`);
}

run().catch(async (error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
