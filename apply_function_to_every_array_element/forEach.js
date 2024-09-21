import { log_results } from "../log_results.mjs";
import { checkOddEvenNaN } from "./checkOddEvenNaN.js";
import { demoArray } from "./demoArray.js";

// Using the 'for each' method
const useForEach = (arrs = []) => {
  return arrs.forEach((arr, index, mainArray) => {
    log_results(checkOddEvenNaN(arr), `Array Item - ${index + 1}`, mainArray);
  });
};

useForEach(demoArray);
