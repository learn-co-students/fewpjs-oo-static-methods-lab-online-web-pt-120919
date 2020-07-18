class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    let excluded = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newString = string.split(" ") 
    let returnedString = newString.map(word => {
      if (word[0] || !excluded.includes(word)) {
        Formatter.capitalize(word)
      }
    })
    console.log(returnedString)
  }
}