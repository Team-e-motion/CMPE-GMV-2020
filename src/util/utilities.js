/* Length of the alphabet used, Latin alphabet */
export const alphabetLength = 26;

/* Function to generate the range of values given the start, end and the step size */
export const range = (start, end, step) =>
    Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

/* List of Chars for the alphabet  */
export const alphabetChars = range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
);

/* Count frequency of characters in a string */
export const counter = (str) => [...str].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {});

/* Remove punctuation characters from a given string */
export const removePunctuation = (str) =>
    str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');

/* Remove whitespaces from a given string */
export const removeWhitespaces = (str) => str.replace(/\s/g, '');

/* Standardize a message to match the expected format: lowering the string, removing ñ character and accents/diacritics */
export const standardizeString = (str) =>
    str
        .toLowerCase()
        .replace('ñ', '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

/* Counts the number of letters from the latin alphabet in a message and returns a dictionary with the values */
export const countFrequencyLetters = (str) =>
    counter(standardizeString(removeWhitespaces(removePunctuation(str))));
