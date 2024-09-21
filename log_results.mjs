/**
 * Logs result to the console with an optional name.
 * @param {*} result - The result to log, can be of any type.
 * @param {string} [name='Result'] - The name or label to include in the log (optional).
 * @param {*} [optional=""] - Any optinal returns (optional).
 * @returns {void} - No return value.
 */

const log_results = (result, name = "Result", optional = "") => {
  console.log("              __|-Debugging-|__");
  console.log("---------------------------------------------------");
  console.log({ [name]: result });
  console.log(optional);
  console.log("---------------------------------------------------");
};

export { log_results };
