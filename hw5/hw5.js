
let operation = prompt("Виберіть операцію: add, sub, mult або div");

    let number1 = parseFloat(prompt("Введіть перше число:"));
    let number2 = parseFloat(prompt("Введіть друге число:"));

        // Визначення результату в залежності від вибраної операції
        if (operation === "add")
        {result = number1 + number2;}
        else if (operation === "sub")
        {result = number1 - number2;}
        else if (operation === "mult")
        {result = number1 * number2;}
        else if (operation === "div")
        {result = number1 / number2;}

        if (result !== undefined)
        {alert(`${number1} ${operation} ${number2} = ${result}`);}
