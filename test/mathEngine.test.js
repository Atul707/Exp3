const { calculate } = require("../src/utils/mathEngine");

test("addition", () => {
    expect(calculate(5, 3, "add")).toBe(8);
});

test("subtraction", () => {
    expect(calculate(5, 3, "subtract")).toBe(2);
});

test("multiplication", () => {
    expect(calculate(5, 3, "multiply")).toBe(15);
});

test("division", () => {
    expect(calculate(6, 3, "divide")).toBe(2);
});

test("division by zero", () => {
    expect(() => calculate(5, 0, "divide")).toThrow("Cannot divide by zero");
});