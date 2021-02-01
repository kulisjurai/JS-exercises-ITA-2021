//********************toDecimal***********************/

const input = document.getElementById('to-decimal');
const button = document.getElementById('btn-to-decimal');
button.addEventListener('click', startProgram);

function startProgram() {
    document.getElementById('displayDecimal').innerHTML = toDecimalOuter(input.value);
}

function toDecimalOuter(stringBinary) {
    for (let i = 0; i < stringBinary.length; i++) {
        if ((stringBinary[i] > 1) || (stringBinary.includes('-1'))) return `<span style="font-size:20px;">error: use only 0 and 1</span>`;
    }
    let sum = 0;
    let exponent = 1;
    function recursiveBinary(binaryNumber) {
        if (stringBinary[binaryNumber - 1] == '1') sum += exponent;
        exponent = exponent * 2;
        exponent + 2;
        if (binaryNumber <= 1) return binaryNumber;
        else {
            recursiveBinary(binaryNumber - 1)
        }
    }
    recursiveBinary(stringBinary.length);
    return sum;
}

//*******************toBinary*****************//
const inputBinary = document.getElementById('to-binary');
const buttonBinary = document.getElementById('btn-to-binary');
buttonBinary.addEventListener('click', startProgram2);

function startProgram2() {
    document.getElementById('displayBinary').innerHTML = binaryConverter(inputBinary.value);
}

function binaryConverter(decimal) {
    let stringSum = '';
    let reverted = '';
    function toBinary(decimalNumber) {
        if (decimalNumber < 1) return 0;
        else {
            stringSum += Math.floor(decimalNumber % 2)
            return toBinary(decimalNumber / 2)
        }
    }
    toBinary(decimal)
    for (let i = stringSum.length - 1; i >= 0; i--) {
        reverted += stringSum[i];
    }
    return (reverted.length > 16) ? `<span style="font-size:20px;">${reverted}</span>` : reverted;
}
