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
    str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');

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

/* Given a character and a string, counts the number of characters in the string */
export const countFrequencySingleLetter = (str, char) =>
    [...str].reduce((t, c) => t + (char === c ? 1 : 0), 0);

/* Transforms a number to words in Spanish */
export const numberToWord = (number) => {
    const outlierNums = {
        0: 'cero',
        10: 'diez',
        11: 'once',
        12: 'doce',
        13: 'trece',
        14: 'catorce',
        15: 'quince',
        20: 'veinte',
        100: 'cien',
        1000: 'mil'
    };
    if (number in outlierNums) {
        return outlierNums[number];
    }
    if (number < 100) {
        const units = [
            '',
            'una',
            'dos',
            'tres',
            'cuatro',
            'cinco',
            'seis',
            'siete',
            'ocho',
            'nueve'
        ];
        const tens = [
            '',
            'dieci',
            'veinti',
            'treinta',
            'cuarenta',
            'cincuenta',
            'sesenta',
            'setenta',
            'ochenta',
            'noventa'
        ];
        if (number % 10 === 0) {
            return tens[Math.floor(number / 10)];
        }
        if (number < 30) {
            return tens[Math.floor(number / 10)] + units[Math.floor(number % 10)];
        }
        return tens[Math.floor(number / 10)] + ' y ' + units[number % 10];
    }
    if (number < 1000) {
        const hundreds = [
            '',
            'ciento',
            'doscientas',
            'trescientas',
            'cuatrocientas',
            'quinientas',
            'seiscientas',
            'setecientas',
            'ochocientas',
            'novecientas'
        ];
        if (number % 100 === 0) {
            return hundreds[Math.floor(number / 100)];
        }
        return hundreds[Math.floor(number / 100)] + ' ' + numberToWord(number % 100);
    }
    if (number < 1000000) {
        if (number < 2000) {
            return 'mil ' + numberToWord(number % 1000);
        }
        if (number % 1000 === 0) {
            return numberToWord(Math.floor(number / 1000)) + ' mil';
        }
        return numberToWord(Math.floor(number / 1000)) + ' mil ' + numberToWord(number % 1000);
    }
    return -1;
};

/* Counts the frequency of a given character in the word which express a given number */
export const charFrequencyInNumber = (character, number) =>
    countFrequencySingleLetter(numberToWord(number), character);
