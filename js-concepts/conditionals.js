let a = 10
let b = 20

// AND = &&

console.log(a > 9 && b <= 20)  // true
console.log(a > 9 && b <= 10)  // false
console.log(a > 15 && b <= 20) // false
console.log(a > 15 && b <= 10) // false

/*
true && true = true
true && false = false
false && true = false
false && false = false
*/

// OR = ||

console.log(a > 9 || b <= 20)  // true
console.log(a > 9 || b <= 15)  // true
console.log(a > 20 || b <= 20) // true
console.log(a > 20 || b <= 15) // false

/*
true || true = true
true || false = true
false || true = true
false || false = false
*/

// NOT = !

console.log(!(a > 9))  // false
console.log(!(a > 10)) // true

/*
NOT true = false
Not false = true
*/
