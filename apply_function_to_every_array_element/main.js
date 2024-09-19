// Apply function to every element in an array.
// Use case:
// Return if a number is even or odd or not a number
import { log_results } from "../log_results.mjs";
import { checkOddEvenNaN } from "./odd_even_logic.js";

const array = [1, 2, 3, 4, "imposter"];

// Using the 'for each' method
const useForEach = (arrs = []) => {
  return arrs.forEach((arr, index, mainArray) => {
    log_results(
      checkOddEvenNaN(arr),
      `Position in array ${index + 1}`,
      mainArray
    );
  });
};

useForEach(array);
