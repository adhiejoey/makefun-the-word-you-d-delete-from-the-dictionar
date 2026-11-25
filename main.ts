import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "forever";

// Mirror the house gate: one word, 1 to 77 characters, not only whitespace.
if (word.length < 1 || word.length > 77 || word.trim().length === 0) {
  throw new Error("entry fails the gate: must be 1 to 77 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
