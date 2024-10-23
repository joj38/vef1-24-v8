import { isString } from "./helpers.js";

export function reverse(str) {
  if (isString(str)) {
    let split = str.split("");

    return split.reverse().join("");
  }
  return null;
}
