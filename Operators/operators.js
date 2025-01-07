let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let c = Number(prompt("Enter the third number:"));


if (a > b && a > c) {
    console.log(a + " is greater");
} else if (b > a && b > c) {
    console.log(b + " is greater");
} else if (c > a && c > b) {
    console.log(c + " is greater");
} else if (a == b && b == c && c == a) {
    console.log("All the values are equal")
} else {
    console.log("Invalid input");
}

