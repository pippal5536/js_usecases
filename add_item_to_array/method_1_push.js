/**
 * Creates a new array by copying the original array and applying a callback function to add an item.
 * @param {(string|number)[]} arr - The original array containing strings and/or numbers.
 * @param {(string|number)} item - The item to add to the new array.
 * @param {((string|number)[], (string|number)) => number} callback - A callback function that modifies the array and returns the new length.
 * @returns {(string|number)[]} - A new array with the item added by the callback function.
 */
const addItemToNewArray = (arr, item, callback) => {
  // Shallow copy the original array
  const newArray = [...arr];

  // Apply the callback function to modify the new array
  callback(newArray, item);

  // Return the new array
  return newArray;
};

/**
 * Adds an item to the end of the array using the push method.
 * @param {(string|number)[]} arr - The array to which the item will be added.
 * @param {(string|number)} item - The item to add to the array.
 * @returns {number} - The new length of the array after the item is added.
 */
const pushValue = (arr, item) => arr.push(item);

export { addItemToNewArray, pushValue };
