// Snooze Button Roast — writes one roast line to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node 22+, stdlib only, fully deterministic: no input, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "At 6 AM on a Saturday, my alarm clock booked a meeting with my consciousness and forgot to send the agenda.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
