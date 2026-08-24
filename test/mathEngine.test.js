const { calculate } = require("../src/utils/mathEngine");

describe("calculate function", () => {

    test("should add two numbers", () => {
        expect(calculate(10, 5, "add")).toBe(15);
    });

    test("should subtract two numbers", () => {
        expect(calculate(10, 5, "subtract")).toBe(5);
    });

    test("should multiply two numbers", () => {
        expect(calculate(10, 5, "multiply")).toBe(50);
    });

    test("should divide two numbers", () => {
        expect(calculate(10, 5, "divide")).toBe(2);
    });

    test("should throw error when dividing by zero", () => {
        expect(() => calculate(10, 0, "divide"))
            .toThrow("Cannot divide by zero");
    });

    test("should throw error for invalid operation", () => {
        expect(() => calculate(10, 5, "power"))
            .toThrow("Invalid operation");
    });
});