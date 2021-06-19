

// Repeat a String Repeat a String


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {

    if ( num < 0 ) {

      return ""
    } 

    let repeatedStr = ""

    for (let i = 0; i < num; i++) {

      //repeatedStr = repeatedStr + str

      repeatedStr += str
     
    }

    return console.log(repeatedStr)
  
  }
  
  repeatStringNumTimes("this", -1);

