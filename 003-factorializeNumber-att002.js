// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// let n = 6
// let factorial

// if (n === 0) {
//     console.log(1)
// } else {
//     for (let i = n -1; i > 0; i--) {
   
//         n = n * i 
// }
// console.log(n)
// }


//when submitted to FCC i took replaced the console logs with return value but it still failed the tests.

function factorialize(num) {
    if (num === 0) {
        return console.log(1)
        } else {
            for (let i = num -1; i > 0; i--) {
           
                num = num * i 
        }
      
        }
    return console.log(num)
  }
  
  factorialize(20);