var num1 = 0.1;
var num2 = 0.3;

var num = num1 + num2;
num = num.toFixed(3); //fixing upto decimal 3
num = parseFloat(num); //parsing it to float so that the string converts to float
console.log(num);

var num = num1 / num2;
num = num.toFixed(4);

num = parseFloat(num);
console.log(num);
