/**
 * Capitalize the first letter of a word.
 *
 * @param {string} word The word to capitalize
 * @return {string} The Capitalized Word
 *
 */

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

module.exports = capitalizeWord;
