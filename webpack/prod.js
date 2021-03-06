var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

const publicPath = null;

const eslint = {
    failOnError: false
};

const plugins = [
    new CleanPlugin(['public'], {
        root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
        title: 'thngs.io',
        template: './src/html/index.html',
        hash: true
    }),
    new ExtractTextPlugin('styles.css?[contenthash]')
];

const loaders = [
    {
        test: /.js?$/,
        loaders: ['babel?presets[]=es2015,presets[]=react', 'eslint'],
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
    },
    {
        test: /\.json$/,
        loaders: ['raw']
    },
    {
        test: /\.jpg$/,
        loaders: ['file?name=[name].[ext]?[hash]']
    },
    {
        test: /\.png$/,
        loaders: ['file?name=[name].[ext]?[hash]']
    },
    {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loaders: ['file?name=[name].[ext]?[hash]']
    }
];

module.exports = { publicPath, eslint, plugins, loaders };
