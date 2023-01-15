import { numbersToWords } from "../number-to-words";

describe("numbersToWords", () => {
  it("should throw 'The argument must be a number' for NaN", () => {
    expect(() => {
      numbersToWords("NaN" as any);
    }).toThrow("The argument must be a number");
  });

  it("should throw 'The number must be between 0 and 100000.' for -5", () => {
    expect(() => {
      numbersToWords(-5);
    }).toThrow("The number must be between 0 and 100000.");
  });

  it("should throw 'The number must be between 0 and 100000.' for 100002", () => {
    expect(() => {
      numbersToWords(100002);
    }).toThrow("The number must be between 0 and 100000.");
  });

  it("should throw 'The number must be between an integer' for a 10.3", () => {
    expect(() => {
      numbersToWords(10.3);
    }).toThrow("The number must be an integer");
  });

  it("should return 'zero' for 0", () => {
    const result = numbersToWords(0);
    expect(result).toEqual("zero");
  });

  it("should return 'one' for 1", () => {
    const result = numbersToWords(1);
    expect(result).toEqual("one");
  });

  it("should return 'eleven' for 11", () => {
    const result = numbersToWords(11);
    expect(result).toEqual("eleven");
  });

  it("should return 'forty' for 40", () => {
    const result = numbersToWords(40);
    expect(result).toEqual("forty");
  });

  it("should return 'fifty-two' for 52", () => {
    const result = numbersToWords(52);
    expect(result).toEqual("fifty-two");
  });

  it("should return 'one hundred and five' for 105", () => {
    const result = numbersToWords(105);
    expect(result).toEqual("one hundred and five");
  });

  it("should return 'one hundred and twenty-three' for 123", () => {
    const result = numbersToWords(123);
    expect(result).toEqual("one hundred and twenty-three");
  });

  it("should return 'two hundred and fifty-two' for 252", () => {
    const result = numbersToWords(252);
    expect(result).toEqual("two hundred and fifty-two");
  });

  it("should return 'ten thousand and twenty-five' for 10025", () => {
    expect(numbersToWords(10025)).toBe("ten thousand and twenty-five");
  });

  it("should return 'twelve thousand, three hundred' for 12055", () => {
    const result = numbersToWords(12055);
    expect(result).toEqual("twelve thousand and fifty-five");
  });

  it("should return 'twelve thousand, three hundred' for 12300", () => {
    const result = numbersToWords(12300);
    expect(result).toEqual("twelve thousand, three hundred");
  });

  it("should return 'twelve thousand, three hundred' for 12303", () => {
    const result = numbersToWords(12303);
    expect(result).toEqual("twelve thousand, three hundred and three");
  });

  it("should return 'one hundred thousand' for 100000", () => {
    expect(numbersToWords(100000)).toBe("one hundred thousand");
  });
});
