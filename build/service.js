const { execSync } = require('child_process')
const { getParams } = require('./utils')
const params = getParams()

const vueParams = Object.entries(params)
  .filter((item) => ['--pname', '--action'].indexOf(item[0]) === -1)
  .map((item) => {
    return `${item[0]} ${item[1]}`
  })
  .join(' ')

process.env.PROJECT_NAME = params['--pname']
execSync(`vue-cli-service ${params['--action']} ${vueParams}`, {
  stdio: 'inherit'
})
