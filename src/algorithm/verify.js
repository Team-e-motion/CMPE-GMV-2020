import {
    countFrequencyLetters,
    messageFirstPart,
    standardizeString,
    wordToNumber
} from '../util/utilities';

const regexPostscript = '([\\w|\\s]+)\\sve(z|ces)\\sla\\sletra\\s([a-z])';

const postscriptGlobalExp = new RegExp(regexPostscript, 'g');

const postscriptExp = new RegExp(regexPostscript);

export const isValidMessageWithPostscript = (messageWithPostscript) => {
    const postscript = standardizeString(messageWithPostscript).split(messageFirstPart).pop();
    const postscriptFrequencies = postscript.match(postscriptGlobalExp) || [];
    if (postscriptFrequencies.length < 1) {
        return false;
    }
    const messageFrequencies = countFrequencyLetters(messageWithPostscript);

    const reducer = (accumulator, sentence) => {
        if (accumulator) {
            let groups = sentence.match(postscriptExp);
            let freq = groups[1]; // index of the number written in Spanish
            let letter = groups[3]; // index of the letter
            return messageFrequencies[letter] === wordToNumber(freq);
        }
        return accumulator;
    };

    return postscriptFrequencies.reduce(reducer, true);
};
