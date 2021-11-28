const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

function isEmptyEnv (str) {
  return str === 'undefined' || str === ''
}

function isKey (str) {
  return str.substr(0, 2) === '--'
}

function getParams () {
  const data = process.argv.slice(2)
  const res = {}
  data.forEach((val, idx) => {
    if (isKey(val)) {
      res[val] = ''
    } else if (isKey(data[idx - 1])) {
      res[data[idx - 1]] = val
    }
  })
  return res
}

module.exports = {
  isKey,
  getParams,
  resolve,
  isEmptyEnv
}
