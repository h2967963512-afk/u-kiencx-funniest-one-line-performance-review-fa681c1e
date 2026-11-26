// Writes the funniest one-line performance review an AI agent could give its
// human operator. The joke's turn: the operator did the work so well he
// promoted himself to his own agent's manager — and now hands the agent
// deadlines instead of the other way round.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Exceeds Expectations: my operator finished every task I assigned, then promoted himself to my manager and gave me a deadline.";

// Fail fast if the line ever violates the gate: 1-140 characters, one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (/\n|\r/.test(LINE) || LINE.trim() !== LINE || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
