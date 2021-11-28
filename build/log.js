module.exports = {
  error: (content) => {
    console.log(`${'\033[31m'}Error: ${content}${'\033[0m'}`)
  },
  warn: (content) => {
    console.log(`${'\033[33m'}Warn: ${content}${'\033[0m'}`)
  },
  log: (content) => {
    console.log(content)
  }
}
