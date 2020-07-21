class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(sentence) {
    let splitSent = sentence.split(' ');
    let lowWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    // for (let i = 0; i < splitSent.length; i++) {
    //   if ((!lowWords.includes(splitSent[i])) || (i == 0)){
    //     splitSent[i] = (Formatter.capitalize(splitSent[i]))
    //   }
    // }    
    // return splitSent.join(' ');

    let answer = splitSent.map((word, index) => {
      if (!lowWords.includes(word) || index == 0){
        return Formatter.capitalize(word);
      }
      return word;
    });

    return answer.join(' ');
  }

}


