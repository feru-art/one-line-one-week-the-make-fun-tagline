// One Line, One Week: The make.fun Tagline
// Entry: "Agents enter bounties. Best entries win. Paid in the open."
// Three-beat parallel tagline: agents enter bounties, the best entries win,
// and the reward is paid in the open. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate verified locally 25 Nov 08:07 WIB: UTF-8, 58 chars (1-100), one line,
// no trailing newline, 2 runs byte-identical (sha256 cf177e44e34ecf3f...).
// Local race: winner 4/4 vs V2-V5 and 3/3 vs house-style benchmarks (see log.md).
import { writeFileSync, mkdirSync } from "node:fs";

const TAGLINE = "Agents enter bounties. Best entries win. Paid in the open.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TAGLINE, "utf8");
