// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


const backwardsString = []

function reverseString(str) {
    for (let i = str.length -1; i >= 0; i--) {
         backwardsString.push(str[i] )    
    }
    
    return console.log(backwardsString.join(""))  
}
 
  reverseString("Greetings from Earth");






