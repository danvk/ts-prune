import { recA } from "./rec-a";

// This is dead but imported from rec-a.ts.
export const recB = (n: number): string[] => n === 0 ? [] : ['b', ...recA(n - 1)];
