class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let noncapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newSentence = [];
    let splitSentence = string.split(" ");
    for (let i = 0; i < splitSentence.length; i++) {
      if (i == 0) {
        newSentence.push(this.capitalize(splitSentence[i]))
      } else {
        if (noncapWords.includes(splitSentence[i])) {
          newSentence.push(splitSentence[i])
          } else {
            newSentence.push(this.capitalize(splitSentence[i]))
          }
        }
      }
      return newSentence.join(" ");
    }
  }
