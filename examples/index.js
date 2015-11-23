var babelOpts = {
    presets: ['es2015']
}

require('babel-core/register')(babelOpts)
require('babel-polyfill')

require('./src/main')
