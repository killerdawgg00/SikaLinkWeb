import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the SikaLink landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SikaLink — Money without borders<\/title>/i);
  assert.match(html, /Your money\./);
  assert.match(html, /Without borders\./);
  assert.match(html, /Multi-currency wallets/);
  assert.match(html, /How it works/);
  assert.match(html, /Join the waitlist/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("ships deployment metadata and required brand assets", async () => {
  const html = await (await render()).text();
  assert.match(html, /rel="icon"[^>]+sikalink-main\.png/i);
  assert.match(html, /property="og:image"[^>]+og\.png/i);

  await Promise.all([
    access(new URL("../public/sikalink-main.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/screens/home.png", import.meta.url)),
    access(new URL("../public/screens/send.png", import.meta.url)),
    access(new URL("../dist/server/index.js", import.meta.url)),
    access(new URL("../dist/.openai/hosting.json", import.meta.url)),
  ]);
});
