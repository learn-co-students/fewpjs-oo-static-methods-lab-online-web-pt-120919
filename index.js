class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newSentence = []
    let stringArray = string.split(" ")

    for (let i = 0; i < stringArray.length; i++){
      if (i == 0){
        newSentence.push(Formatter.capitalize(stringArray[i]))
      }
      else if (exceptions.includes(stringArray[i])){
        newSentence.push(stringArray[i])
      }
      else {
        newSentence.push(Formatter.capitalize(stringArray[i]))
      }
    }
    return newSentence.join(" ")
  }
}