class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    
    const skip = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitString = string.split(" ") 
    // turns the string into an array
    let newArr = [this.capitalize(splitString[0])]
    // HAS TO ALWAYS CAPATILIZE THE FIRST WORD NO MATTER WHAT 
    // so have to store first word first let newArr = [this.capitalize(splitString[0])]
    // so it doesn't run through and check if its a skip word
    // this = the class so Formatter is this
    // makes an array with Formatter.capitalize(splitString[0])
    debugger
    for(let i = 1; i < splitString.length; i++) {
      // start at 1 because first word is already stored in the new array
      if (skip.includes(splitString[i])) {
        newArr.push(splitString[i])
        // if the word is included in the skip array store it the way it is
      } else {
        newArr.push(this.capitalize(splitString[i]))
        // if the word is not stored in the skip array capatilze it
      }
    } 
    return newArr.join(" ")
    // turn the array back into a string
  }
}

// Formatter.titleize("this string pleasee")
// Static are class functions so must be called on class, can be called inside each other as well
// use debugger to see what things are
