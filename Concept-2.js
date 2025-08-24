const flag = true

if (!flag) {
    console.log('Condition not verify')
} else {
    console.log('I collect all value reject by if condition, I am Else Block.....')
}

let i = 0
while (i < 10) {
    i++
    console.log('1 * ' + i + ' =', i)
}
console.log('Q1. While loop is printing the table of two')
let x = 0
while (x < 10) {
    x++
    console.log('2 * ' + x + ' =', 2 * x)
}

console.log('Program with for loop to print the table of two')
console.log('Print')
for (let k = 1; k <= 10; k++) {
    console.log('2 * ' + k + ' = ', (2 * k))
}
console.log('Q. Write a program to print common multiple of 2 and 5 in range 1 to 20')

let countPrintValue = 1
for (let k = 1; k <= 20; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        console.log('Common multiple of 2 and 5 till 20 : ' + countPrintValue + 'th number : ', k)
        countPrintValue++
    }
}
