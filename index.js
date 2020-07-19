class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let nonCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = []
    let sentence = string.split(' ')
    for( let i = 0; i < sentence.length; i++){
      if (i === 0) {
        result.push(this.capitalize(sentence[i]))
      }else {
        if ( nonCap.includes(sentence[i])) {
          result.push(sentence[i])
        }else {
          result.push(this.capitalize(sentence[i]))
        }
      }
    }
  return result.join(" ")
}
}