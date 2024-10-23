import { isString } from "./helpers.js";
export function shortest(str) {
  if (isString(str)) {
    let split = str.split(" ");
    let ans = "";
    for (const word of split)
      if (word !== "" && word !== " ")
        if (ans.length > word.length || ans === "") ans = word;

    return ans;
  }
  return null;
}
