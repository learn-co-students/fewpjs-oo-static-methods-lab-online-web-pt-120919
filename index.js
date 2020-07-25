class Formatter {
  
  static capitalize(phrase){
    return (phrase[0].toUpperCase() + phrase.slice(1, phrase.length))
  }

  static sanitize(phrase) {
    return phrase.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(phrase){
    const listOfUncapitalizedWords = [
      'the', 
      'a', 
      'an', 
      'but', 
      'of', 
      'and', 
      'for', 
      'at', 
      'by', 
      'from'
    ]
    let titelizedPhrase = []
    const words = phrase.split(" ")

    for(let i=0; i<words.length; i++){
      let word = words[i]
      let wordToUncaptitalize = listOfUncapitalizedWords.find(el => el.toLowerCase() == word)
      if (wordToUncaptitalize && i > 0) { // Always capitalize first word
        titelizedPhrase.push(wordToUncaptitalize.toLowerCase())
      }
      else{
        titelizedPhrase.push(this.capitalize(word))
      }
    }
    return titelizedPhrase.join(" ")
  }
}