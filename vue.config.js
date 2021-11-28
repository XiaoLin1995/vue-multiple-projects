const { resolve, isEmptyEnv } = require('./build/utils')
const { PROJECT_NAME } = process.env

module.exports = {
  publicPath: './',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@src': resolve('src'),
      '@components': resolve('src/components'),
      '@utils': resolve('src/utils'),
      '@styles': resolve('src/styles')
    }
    if (isEmptyEnv(PROJECT_NAME)) {
      config.entry.app = resolve('src/main.js')
      config.resolve.alias['@'] = resolve('src')
    } else {
      config.entry.app = resolve(`projects/${PROJECT_NAME}/main.js`)
      config.resolve.alias['@'] = resolve(`projects/${PROJECT_NAME}`)
    }
  }
}
