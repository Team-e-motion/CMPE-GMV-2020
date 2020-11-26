import {
    alphabetChars,
    charFrequencyInNumber,
    countFrequencyLetters,
    numberToWord,
    messageFirstPart,
    messageSecondPart,
    kConstantFirstMillion,
    messageSecondPartSingle
} from '../util/utilities';

const postscriptConstantFrequencies = countFrequencyLetters(messageFirstPart + messageSecondPart);

export const certifyMessage = (message, certifyingChar) => {
    const messageFrequencies = countFrequencyLetters(message);
    return certifyingChar === 'all'
        ? certifyMessageAllChars(messageFrequencies)
        : certifyMessageSingleChar(messageFrequencies, certifyingChar);
};

const certifyMessageSingleChar = (messageFrequencies, certifyingChar) => {
    const messageCharFrequency =
        certifyingChar in messageFrequencies ? messageFrequencies[certifyingChar] : 0;
    const postscriptConstantFrequency =
        certifyingChar in postscriptConstantFrequencies
            ? postscriptConstantFrequencies[certifyingChar]
            : 0;
    const messageCharFreq = messageCharFrequency + postscriptConstantFrequency + 1; // Note that it always contains at least the letter at the end of the message

    const bound = kConstantFirstMillion + messageCharFreq;

    let minValidFreq = messageCharFreq;
    for (
        ;
        minValidFreq < bound &&
        charFrequencyInNumber(certifyingChar, minValidFreq) + messageCharFreq !== minValidFreq;
        minValidFreq++
    );

    if (minValidFreq < bound) {
        return (
            messageFirstPart +
            numberToWord(minValidFreq) +
            (minValidFreq > 1 ? messageSecondPart : messageSecondPartSingle) +
            certifyingChar
        );
    } else {
        return 'There is no valid postscript for the message.';
    }
};

const certifyMessageAllChars = (messageFrequencies) => {
    return (
        messageFirstPart +
        alphabetChars.map((char) => ' ' + char.toUpperCase() + messageSecondPart + char)
    );
};
