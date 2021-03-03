const RandomNumGen = require("../src/randomNumGen");

const randomNumGen = new RandomNumGen();

describe("RandomNumGen", () => {
  test("test a small array", () => {
    randomNumGen.generate([200, 3000]);
    expect(randomNumGen.randomNum > 1);
    expect(randomNumGen.randomNum < 10);
  });

  test("test a negative entry on first number", () => {
    expect(() => {
      randomNumGen.generate([-15, 10]);
    }).toThrow("negative entries aren't allowed");
  });

  test("test a negative entry on second number", () => {
    expect(() => {
      randomNumGen.generate([15, -100]);
    }).toThrow("negative entries aren't allowed");
  });

  test("test a negative entry on both number", () => {
    expect(() => {
      randomNumGen.generate([-115, -100]);
    }).toThrow("negative entries aren't allowed");
  });

  test("test array with equals entries", () => {
    expect(() => {
      randomNumGen.generate([10, 10]);
    }).toThrow("equals entries aren't allowed");
  });

  test("test array with more than two number", () => {
    expect(() => {
      randomNumGen.generate([10, 20, 30]);
    }).toThrow("invalid array");
  });
});