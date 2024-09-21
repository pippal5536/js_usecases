import { checkOddEvenNaN } from "./checkOddEvenNaN.js";
import { demoArray } from "./demoArray.js";
import { log_results } from "../log_results.mjs";

// Using the map method
const useMap = (arrs = []) => {
  return arrs.map((arr) => {
    return checkOddEvenNaN(arr);
  });
};

log_results(useMap(demoArray), "result", demoArray);
