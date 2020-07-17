class Formatter {
  static capitalize(string){
    let character = string.charAt(0)
    return character.toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayWords = string.split(" ")
    let result = []
    for(let i=0; i < arrayWords.lenghth; i++){
      if(i == 0){
        result.push(this.capitalize(arrayWords[i]))
      }else{
        if(exceptions.includes(arry[i])){
          result.push(arrayWords[i])
        }
        else{
          result.push(this.capitalize(arrayWords[i]))
        }
      }
    }
    return result.join(" ")
  }
    
    
  }
