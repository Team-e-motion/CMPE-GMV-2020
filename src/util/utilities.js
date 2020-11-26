/* Length of the alphabet used, Latin alphabet */
export const alphabetLength = 26;
/* First part of the message postscript */
export const messageFirstPart = 'en este mensaje aparece ';
/* Second part of the message postscript when frequency > 1 */
export const messageSecondPart = ' veces la letra ';
/* Second part of the message postscript when frequency == 1 */
export const messageSecondPartSingle = ' vez la letra ';
/* K-Constant for the first million numbers written in Spanish */
export const kConstantFirstMillion = 20;

/* Transcript for numbers in Spanish */
const numbersTranscript = {
    y: 0,
    una: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
    diez: 10,
    once: 11,
    doce: 12,
    trece: 13,
    catorce: 14,
    quince: 15,
    dieciseis: 16,
    diecisiete: 17,
    dieciocho: 18,
    diecinueve: 19,
    veinte: 20,
    veintiuna: 21,
    veintidos: 22,
    veintitres: 23,
    veinticuatro: 24,
    veinticinco: 25,
    veintiseis: 26,
    veintisiete: 27,
    veintiocho: 28,
    veintinueve: 29,
    treinta: 30,
    cuarenta: 40,
    cincuenta: 50,
    sesenta: 60,
    setenta: 70,
    ochenta: 80,
    noventa: 90,
    cien: 100,
    ciento: 100,
    doscientas: 200,
    trescientas: 300,
    cuatrocientas: 400,
    quinientas: 500,
    seiscientas: 600,
    setecientas: 700,
    ochocientas: 800,
    novecientas: 900,
    mil: 1000
};

/* Function to generate the range of values given the start, end and the step size */
export const range = (start, end, step) =>
    Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

/* List of Chars for the alphabet  */
export const alphabetChars = range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
);

/* Count frequency of characters in a string */
export const charCounter = (str) => [...str].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {});

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
    charCounter(standardizeString(removeWhitespaces(removePunctuation(str))));

/* Given a character and a string, counts the number of characters in the string */
export const countFrequencySingleLetter = (str, char) =>
    [...str].reduce((t, c) => t + (char === c ? 1 : 0), 0);

/* Transforms a number to words in Spanish
 *   TODO: Throw exception for numbers greater or equal than 1000000 */
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
};

/* Transforms a set of words into a number */
export const wordToNumber = (sentence) => {
    const sentenceWords = sentence.split(' ');

    let result = 0;
    let hundreds = false;
    const forLength = sentenceWords.length - 1;

    for (let i = forLength; i >= 0; i--) {
        let currentWords = sentenceWords[i];
        if (result >= 0 && currentWords in numbersTranscript) {
            if (currentWords === 'mil' && i !== 0) {
                hundreds = true;
            } else if (hundreds) {
                result += numbersTranscript[currentWords] * 1000;
            } else {
                result += numbersTranscript[currentWords];
            }
        } else {
            return (result = -1);
        }
    }
    return result;
};

/* Counts the frequency of a given character in the word which express a given number */
export const charFrequencyInNumber = (character, number) =>
    countFrequencySingleLetter(numberToWord(number), character);
