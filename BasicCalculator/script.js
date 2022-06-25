var num1 = parseInt(prompt("First Number: "));
var opr = prompt("operator: ");
var num2 = parseInt(prompt("second number: "));

if (opr == "+") {
    alert(num1 + num2);

} else if (opr == "-") {
    alert(num1 - num2);
} else if (opr == "/") {
    alert(num1 / num2);
} else if (opr == "*") {
    alert(num1 * num2);
}
alert('Thank for coming!');