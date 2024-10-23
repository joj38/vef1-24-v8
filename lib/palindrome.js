import { isString } from "./helpers.js";
import { reverse } from "./reverse.js";
export function palindrome(str) {
  if (isString(str)) {
    str = str.toLowerCase();
    return str === reverse(str) && str !== "";
  }
  return false;
}
