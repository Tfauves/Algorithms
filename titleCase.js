// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of



function titleCase(str) {

    let strSplit = str.toLowerCase().split(" ")

    for (let i = 0; i < strSplit.length; i++) {
     
        let firstLetters = strSplit[i][0]
        

          console.log(firstLetters)
        // }
        
    }
    // return str;
  }
  
  titleCase("I'm a little tea pot");