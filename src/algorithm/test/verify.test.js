import { noPostscriptAvailable } from '../../util/utilities';

const moduleCertify = require('../certify');

describe('Certify Algorithm', () => {
    it('Should single char certify valid messages', () => {
        // Upper & lower case letter
        const message = 'Good morning!';
        const char = 'g';
        const expectedPostscript = 'en este mensaje aparece tres veces la letra g';
        expect(moduleCertify.certifyMessage(message, char)).toBe(expectedPostscript);

        // Upper & lower case letter which appears in the postscript and in many Spanish numbers
        const message2 = 'Theeeeeeeeeeeeerefore, E is an interesting letter';
        const char2 = 'e';
        const expectedPostscript2 = 'en este mensaje aparece treinta y dos veces la letra e';
        expect(moduleCertify.certifyMessage(message2, char2)).toBe(expectedPostscript2);

        // Upper & lower case letter which appears in the in many Spanish numbers
        const message3 = 'Oh... pneumonoultramicroscopicsilicovolcanoconiosis!!!';
        const char3 = 'o';
        const expectedPostscript3 = 'en este mensaje aparece doce veces la letra o';
        expect(moduleCertify.certifyMessage(message3, char3)).toBe(expectedPostscript3);

        // Only using upper & lower case letter with multiple spaces and punctuation marks,
        // including ñ char from Spanish language
        const message4 = ',a.  ;A.a! ¿A?  aÑaAñA  ?   -A)';
        const char4 = 'a';
        const expectedPostscript4 = 'en este mensaje aparece quince veces la letra a';
        expect(moduleCertify.certifyMessage(message4, char4)).toBe(expectedPostscript4);

        // Letter not in the message and not in the postscript
        const message5 = 'Heelllo!';
        const char5 = 'i';
        const expectedPostscript5 = 'en este mensaje aparece una vez la letra i';
        expect(moduleCertify.certifyMessage(message5, char5)).toBe(expectedPostscript5);

        // Letter not in the message but in the postscript
        const message6 = 'Grammar';
        const char6 = 'j';
        const expectedPostscript6 = 'en este mensaje aparece dos veces la letra j';
        expect(moduleCertify.certifyMessage(message6, char6)).toBe(expectedPostscript6);
    });

    it('Should not single char certify nonvalid messages', () => {
        const expectedPostscript = noPostscriptAvailable;

        // Letter which sometimes appears in Spanish numbers, but do appears in the message and postscript
        const message = 'aaaaaaaa';
        const char = 'a';
        expect(moduleCertify.certifyMessage(message, char)).toBe(expectedPostscript);

        // Common letter which appears in postscript, Spanish numbers and in the message
        const message2 = 'hello!';
        const char2 = 'e';
        expect(moduleCertify.certifyMessage(message2, char2)).toBe(expectedPostscript);

        // Letter which do not appear in the postscript or the message but in Spanish numbers
        const message3 = 'Short';
        const char3 = 'u';
        expect(moduleCertify.certifyMessage(message3, char3)).toBe(expectedPostscript);
    });
});
