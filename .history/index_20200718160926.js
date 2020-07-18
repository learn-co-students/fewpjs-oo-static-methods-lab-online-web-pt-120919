class Formatter {
  static capitalize(string) {
    return string.capitalize()
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }
}