class Formatter {
  static capitalize() {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return this.replace(/[^A-Za-z0-9-']+/g, '')
  }
}