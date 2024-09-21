import { checkOddEvenNaN } from "./checkOddEvenNaN.js";
import { demoArray } from "./demoArray.js";
import { log_results } from "../log_results.mjs";

const useReduce = (arr = []) => {
  return arr.reduce((initial, current) => {
    initial.push(checkOddEvenNaN(current));
    return initial;
  }, []);
};

log_results(useReduce(demoArray), "result", demoArray);
