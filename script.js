function calculateResult() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let result;

    switch (operation) {
        case "add":
            result = a + b;
            break;

        case "subtract":
            result = a - b;
            break;

        case "multiply":
            result = a * b;
            break;

        case "divide":
            result = b === 0 ? "Cannot divide by zero" : a / b;
            break;
    }

    document.getElementById("result").textContent = result;
}