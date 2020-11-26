const moduleUtilities = require('./utilities');

const wordsToNumberTest = {
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
    "treinta y tres": 33,
    cuarenta: 40,
    "cuarenta y cuatro": 44,
    cincuenta: 50,
    "cincuenta y cinco": 55,
    sesenta: 60,
    "sesenta y seis": 66,
    setenta: 70,
    "setenta y siete": 77,
    ochenta: 80,
    "ochenta y ocho": 88,
    noventa: 90,
    "noventa y nueve": 99,
    cien: 100,
    "ciento once": 111,
    "ciento cuarenta y cuatro": 144,
    doscientas: 200,
    "doscientas veintidos": 222,
    "doscientas cuarenta y dos": 242,
    trescientas: 300,
    "trescientas veintitres": 323,
    "trescientas cuarenta y tres": 343,
    cuatrocientas: 400,
    "cuatrocientas veinticuatro": 424,
    "cuatrocientas cuarenta y cuatro": 444,
    quinientas: 500,
    "quinientas veinticinco": 525,
    "quinientas cuarenta y cinco": 545,
    seiscientas: 600,
    "seiscientas veintiseis": 626,
    "seiscientas cuarenta y seis": 646,
    setecientas: 700,
    "setecientas veintisiete": 727,
    "setecientas cuarenta y siete": 747,
    ochocientas: 800,
    "ochocientas veintiocho": 828,
    "ochocientas cuarenta y ocho": 848,
    novecientas: 900,
    "novecientas veintinueve": 929,
    "novecientas cuarenta y nueve": 949,
    mil: 1000,
    "mil ciento once": 1111,
    "mil quinientas setenta y siete": 1577,
    "cinco mil quinientas cincuenta y cinco": 5555,
    "novecientas noventa y nueve mil novecientas noventa y nueve": 999999,
    "novecientas mil novecientas noventa y nueve": 900999,
};


test('Words to number transcript', () => {
    const entries = Object.entries(wordsToNumberTest)
    for (const [words, number] of entries) {
        expect(moduleUtilities.wordToNumber(words)).toBe(number);
    }
});


test('Number to words transcript', () => {
    const entries = Object.entries(wordsToNumberTest)
    for (const [words, number] of entries) {
        expect(moduleUtilities.numberToWord(number)).toBe(words);
    }
});

