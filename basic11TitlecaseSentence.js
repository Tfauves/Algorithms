// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {

    let splitLowerStr = str.toLowerCase().split(" ")

    for (let i = 0; i < splitLowerStr.length; i++) {

        splitLowerStr[i] = splitLowerStr[i][0].toUpperCase() + splitLowerStr[i].slice(1)
        
    }
    
    let titleCaseSentence =  splitLowerStr.join(" ")
    return titleCaseSentence;
  }
  
  titleCase("I'm a little tea pot");