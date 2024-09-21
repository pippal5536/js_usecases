import { log_results } from "../log_results.mjs";

const checkifNumEven = (num = 0) => {
  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

log_results(checkifNumEven(2));
