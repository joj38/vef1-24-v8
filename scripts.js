/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";
import { consonants } from "./lib/consonants.js";
import { longest } from "./lib/longest.js";
import { palindrome } from "./lib/palindrome.js";
import { reverse } from "./lib/reverse.js";
import { shortest } from "./lib/short.js";
import { vowels } from "./lib/vowels.js";

const test = isString("hæ");
console.log("test er strengur?", test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

function submitHandler(event) {
  event.preventDefault();
  const textareaElement = document.querySelector("textarea");
  if (textareaElement && textareaElement.value) {
    document.querySelector(".output")?.classList.remove("hidden");
    greina(textareaElement.value);
  }
}

function resetHandler(event) {
  event.preventDefault();
  const { target } = event;
  target.querySelector("textarea").value = "";
  document.querySelector(".output")?.classList.add("hidden");
}

function greina(str) {
  const inputElement = document.querySelector(".input");
  const longestElement = document.querySelector(".longest");
  const shortestElement = document.querySelector(".shortest");
  const vowelsElement = document.querySelector(".vowels");
  const consonantsElement = document.querySelector(".consonants");
  const palindromeElement = document.querySelector(".palindrome");
  const reverseElement = document.querySelector(".reversed");

  if (inputElement) {
    inputElement.textContent = str;
  }

  if (longestElement) {
    longestElement.textContent = longest(str);
  }

  if (shortestElement) {
    shortestElement.textContent = shortest(str);
  }

  if (vowelsElement) {
    vowelsElement.textContent = "" + vowels(str);
  }

  if (consonantsElement) {
    consonantsElement.textContent = "" + consonants(str);
  }
  if (palindromeElement) {
    if (palindrome(str)) palindromeElement.textContent = "";
    else palindromeElement.textContent = "ekki";
  }
  if (reverseElement) {
    reverseElement.textContent = reverse(str);
  }
}

const formElement = document.querySelector("form");
if (formElement) {
  formElement.addEventListener("submit", submitHandler);
  formElement.addEventListener("reset", resetHandler);
}

const textareaElement = document.querySelector("textarea");
if (textareaElement) textareaElement.addEventListener("input", submitHandler);
