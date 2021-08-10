/* //Find  the factorial 6 using for loop
let factorial = 1;
for (let i = 6; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial); */




/* //Find the factorial of 6
// 6*5*4*3*2*1 =
function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    return fact * factorial(fact - 1);
}
console.log(factorial(6)); */

//Same thing changing parameter name
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(6));