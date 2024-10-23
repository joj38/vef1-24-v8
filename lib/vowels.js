import { isString } from "./helpers.js";

const VOWELS = "aeiouyáéýúíóöæ".split("");

export function vowels(str) {
  if (isString(str)) {
    let count = 0;
    let split = str.split("");
    for (const char of split)
      for (const vowel of VOWELS) {
        if (char === vowel) {
          count++;
          break;
        }
      }
    return count;
  }
  return 0;
}
