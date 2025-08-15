var marks = Array(6)
var marks = new Array(10, 20, 30, 40, 50, 60)
console.log(marks)  // [ 10, 20, 30, 40, 50, 60 ]
var marks=[20,30,40,50,60,70]
console.log(marks)  // [ 20, 30, 40, 50, 60, 70 ]
marks[3]=55
console.log(marks)  // [ 20, 30, 40, 55, 60, 70 ]

marks.push(90) 
marks.push(100)
console.log(marks) /* 
[
    20, 30, 40,  55,
    60, 70, 90, 100
]

*/

marks.pop(30)
console.log(marks)
/*
[
  20, 30, 40, 55,
  60, 70, 90
]
*/
marks.unshift(30)
console.log(marks) //[ 30, 40, 55, 60, 70, 90 ]

marks.shift(30)
console.log(marks)
/* 
[
    30, 20, 30, 40,
    55, 60, 70, 90
]
*/
console.log("Length and index of element in array")
var marks=[10,20,30,40,50,60]
console.log('length of array :',marks.length)
console.log('Index of element: ',marks.indexOf(60))
/*
Length and index of element in array
length of array : 6
Index of element:  5
*/
console.log('how to check value exist in array or not')
console.log(marks.includes(60))  // true
console.log(marks.includes(70))  // false

console.log('Sum of Array')
var sum=0
for(let z=0;z<marks.length;z++)
{
    sum+= marks[z]
}
console.log('Sum of Arrya is : ',sum)
//Sum of Array
//Sum of Arrya is :  210