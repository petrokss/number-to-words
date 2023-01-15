import { ones, tens, scales } from "./glossary";
import { MIN_NUMBER, MAX_NUMBER, ZERO } from "./constants";

const splitToThreeDigits = (number: number): number[] => {
  const digitPlaces = [];
  while (number > 0) {
    const remainder = number % 1000;
    digitPlaces.push(remainder);
    number = Math.floor(number / 1000);
  }
  return digitPlaces;
};

const convertThreeDigitToString = (
  number: number,
  isHighestDigitPlace: boolean
): string => {
  let output = "";
  const hundred = Math.floor(number / 100);
  if (hundred > 0) {
    output += `${ones[hundred]} hundred`;
  }

  const twoDigit = number % 100;
  if (twoDigit > 0 && (hundred > 0 || !isHighestDigitPlace)) {
    output += " and ";
  }

  if (twoDigit < 20) {
    output += ones[twoDigit];
  } else {
    const tensPlace = Math.floor(twoDigit / 10);
    const onesPlace = twoDigit % 10;
    if (tensPlace > 0) {
      output += tens[tensPlace];
    }
    if (onesPlace > 0) {
      if (twoDigit) {
        output += "-";
      } else if (!twoDigit || hundred > 0 || !isHighestDigitPlace) {
        output += " and ";
      }
      output += ones[onesPlace];
    }
  }
  return output;
};

const concatWords = (wordsArray: string[]): string => {
  return wordsArray
    .filter((words) => words)
    .reduce((words, currentWord, index) => {
      let delimiter = ", ";
      if (currentWord.startsWith(" and") || index === 0) {
        delimiter = "";
      }
      return words + delimiter + currentWord;
    }, "");
};

export const numbersToWords = (number: number): string => {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("The argument must be a number");
  }
  if (number % 1 !== 0) {
    throw new Error("The number must be an integer");
  }
  if (number < MIN_NUMBER || number > MAX_NUMBER) {
    throw new Error(
      `The number must be between ${MIN_NUMBER} and ${MAX_NUMBER}.`
    );
  }
  if (number === 0) {
    return ZERO;
  }
  if (number < 20) {
    return ones[number];
  }

  let result = "";

  const splitedNumberArray = splitToThreeDigits(number);
  const wordsArray = [];

  for (let i = 0; i < splitedNumberArray.length; i++) {
    let word = "";
    const scaledWord = scales[i];
    const currentNumber = splitedNumberArray[i];
    const isHighestDigitPlace = i === splitedNumberArray.length - 1;
    const numberWord = convertThreeDigitToString(
      currentNumber,
      isHighestDigitPlace
    );

    word += numberWord;
    if (word && scaledWord) {
      word += ` ${scaledWord}`;
    }

    wordsArray.push(word);
  }

  wordsArray.reverse();

  result = concatWords(wordsArray);

  return result;
};
