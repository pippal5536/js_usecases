import { log_results } from "../log_results.mjs";

const capFirstLetter = (letter = "string") => {
  return letter[0].toUpperCase() + letter.substring(1);
};

log_results(capFirstLetter("padadam padadam"));
