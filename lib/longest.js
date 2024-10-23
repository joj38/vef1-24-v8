import { isString } from "./helpers.js";

export function longest(str) {
  if (isString(str)) {
    let split = str.split(" ");
    let ans = "";
    for (const word of split) if (ans.length < word.length) ans = word;

    return ans;
  }
  return null;
}
