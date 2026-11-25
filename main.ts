// Describe Your Ex in One Word — revised.
//
// The first draft spelled the whole thought out (133 chars, over the
// 111-char gate). The joke does not need the caption: one word carries
// it. A relationship treated like a subscription that finally got
// cancelled — "Unsubscribed" lands at a glance, surprises instead of
// insulting, and anyone who has ever cancelled a subscription that
// kept charging them feels the truth in it. Exactly one word, no
// punctuation tricks, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Unsubscribed";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
