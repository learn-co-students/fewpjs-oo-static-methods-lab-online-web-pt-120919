class Formatter {
  static capitalize() {
    return this.capitalize(this)
  }
  static sanitize(string) {
    return this.replace(/[^A-Za-z0-9-']+/g, '')
  }
}