const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = (env, arg) => {
	return {
		entry: ['@babel/polyfill', './src/index.js'],
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.js',
			publicPath: '/'
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'build'),
			compress: true,
			port: 3000,
			historyApiFallback: true
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					query: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				{
					test: /\.css$/,
					loaders: ['style-loader', 'css-loader']
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, './build/index.html'),
				inject: false
			})
		]
	}
}

module.exports = config