import { addItemToNewArray, pushValue } from "./method_1_push.js";
import { log_results } from "../log_results.mjs";
import { addItemInArray } from "./method_2_spread_syntax.js";

const array = ["a", 1];

log_results(addItemToNewArray(array, "c", pushValue), "new array");
log_results(addItemInArray(array, "d"));
