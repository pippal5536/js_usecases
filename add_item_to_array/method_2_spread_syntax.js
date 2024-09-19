/**
 * Adds an item to an array using the spread syntax.
 * @param {(string|number)[]} arr - The original array to which the item will be added.
 * @param {(string|number)} item - The item to add to the array.
 * @returns {(string|number)[]} - Returns a new array with the item added.
 */
const addItemInArray = (arr, item) => {
  // Using the spread syntax.
  return [...arr, item];
};

export { addItemInArray };
