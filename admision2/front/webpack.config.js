var path = require('path')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../js/'),
        filename: '[name].bundle.js'
    },
}