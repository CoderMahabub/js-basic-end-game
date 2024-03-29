/* //For loop using incremental
let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum); */


/* //For loop using decremental
let sum = 0;
for (let i = 6; i <= 1; i--) {
    sum = sum + i;
}
console.log('Summation Using (i--): ', sum); */


//Same Thing using recurtion
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
console.log(sum(6));
