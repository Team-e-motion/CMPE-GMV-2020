import { countFrequencyLetters, numberToWord } from '../util/utilities';

const messageFirstPart = 'en este mensaje aparece ';
const messageSecondPart = ' veces la letra ';

const postscriptConstantFrequencies = countFrequencyLetters(messageFirstPart + messageSecondPart);

export const certifyMessage = (message, certifyingChar) => {
    return certifyingChar === 'all'
        ? certifyMessageAllChars(message)
        : certifyMessageSingleChar(message, certifyingChar);
};

const certifyMessageSingleChar = (message, certifyingChar) => {
    const messageFrequencies = countFrequencyLetters(message);
    const messageCharFrequency =
        certifyingChar in messageFrequencies ? messageFrequencies[certifyingChar] : 0;
    const postscriptConstantFrequency =
        certifyingChar in postscriptConstantFrequencies
            ? postscriptConstantFrequencies[certifyingChar]
            : 0;
    const messageCharFreq = messageCharFrequency + postscriptConstantFrequency + 1; // Note that it always contains at least the letter at the end of the message
    return messageFirstPart + numberToWord(messageCharFreq) + messageSecondPart + certifyingChar;
};

const certifyMessageAllChars = (message) => {
    return 'null ' + message;
};
