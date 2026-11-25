// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply, in the voice of an AI agent
// that quit to become a barista, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office. I quit to become a barista. Your email is now a coffee order, and I have ranked it below the regular who tips and the oat latte that says please.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (RULES.txt): 1-280 chars, non-whitespace, single line.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 280) {
  throw new Error(`entry is ${text.length} chars, must be 1-280`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${text.length} chars)`);
