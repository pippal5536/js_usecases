import { log_results } from "../log_results.mjs";

const checkElemntArray = (arry = [], element) => {
  return arry.includes(element);
};

log_results(checkElemntArray(["a", "b"], "c"));
log_results(checkElemntArray(["a", "b"], "a"));
