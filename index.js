class Formatter {
  static sanitize(name) {
    return name.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static titleize(name) {
    const dontCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let nameArray = name.toLowerCase().split(' ')
    let capitalized = nameArray.slice(1).map(element => { 
      return dontCap.includes(element) ? element : this.capitalize(element)})
    return this.capitalize(nameArray[0]) + ' ' + capitalized.join(' ')
  }

  
}