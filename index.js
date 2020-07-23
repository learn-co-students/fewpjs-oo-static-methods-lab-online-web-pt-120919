class Formatter {
  //add static methods here

 static capitalize(string){
    let words = string.split(' ')
    let capitalized = words.map(x => x.charAt(0).toUpperCase() + x.substr(1)).join(' ')
    return capitalized
      }




static sanitize(string){
return string.replace(/[^A-Za-z0-9 '-]/g, '')
}

static titleize(string){
 let capitalized = string.charAt(0).toUpperCase() + string.slice(1)
 let exceptedWords = ["a", "an", "the", "but", "of", "and", "for", "at", "by", "from"]
 let array = capitalized.split(' ')
 return array.map(string => {
   if(exceptedWords.includes(string)){
   return string}
   else
   {return string.charAt(0).toUpperCase() + string.slice(1)

   }
}).join(' ')
}
}