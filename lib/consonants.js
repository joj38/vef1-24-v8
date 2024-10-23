import { isString } from "./helpers.js";

const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

export function consonants(str) {
  if (isString(str)) {
    let count = 0;
    let split = str.split("");
    for (const char of split)
      for (const cons of CONSONANTS) {
        if (char === cons) {
          count++;
          break;
        }
      }
    return count;
  }
  return 0;
}
