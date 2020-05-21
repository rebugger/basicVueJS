const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { //웹팩 기본구조 EMPO
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules : [{
            test : /\.vue$/,
            use : 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename : '[name].js',
        path : path.join(__dirname, 'dist'),
    },
}