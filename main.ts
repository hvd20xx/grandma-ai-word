import fs from "node:fs";
import path from "node:path";

const WORD = "UNSUBSCRIBE";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) throw new Error(`Invalid word: ${WORD}`);
fs.writeFileSync(dst, WORD, "utf8");
fs.chmodSync(dst, 0o644);
