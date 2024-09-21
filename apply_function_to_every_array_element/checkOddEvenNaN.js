import { log_warned_results } from "../log_results.mjs";
/**
 * Checks if a number is odd or even, or if the input is not a number.
 * @param {*} num - The value to be checked.
 * @returns {string} - Returns "Even" if the number is even, "Odd" if it's odd, and "Not a number my G" if the input is not a number.
 */

const checkOddEvenNaN = (num = 1) => {
  if (isNaN(num) || typeof num !== "number") {
    return log_warned_results("Thats not a number my G");
  }
  return num % 2 === 0 ? "Even" : "Odd";
};

export { checkOddEvenNaN };
