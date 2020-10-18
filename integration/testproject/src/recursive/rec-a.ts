import { b } from "../wildcard/b";
import { recB } from "./rec-b";

// This is dead but imported from rec-b.ts.
export const recA = (n: number): string[] => n === 0 ? [] : ['a', ...recB(n - 1)];

// This is alive (imported from index.ts).
export const nonrecAB = (n: number) => {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(i ? 'b' : 'a');
  }
  return out;
};

export function reallydead() {}
