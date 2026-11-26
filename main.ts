// The Robot Vacuum's Funniest Excuse
// One line, at most 120 characters: the excuse a robot vacuum gives
// for missing a spot. Written to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The rug and I have an agreement: I don't touch its fringe, it doesn't tell you about the crumbs.";

// The gate allows 1 to 120 characters: refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
