module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: './root/js/bundle.js'
	},
	module: {
		 rules: [
			{
				test: /.vue?$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
				options: {
					postcss: [require('postcss-cssnext')()],
					autoprefixer: true,
					cssModules: {
						localIdentName: '[path][name]---[local]---[hash:base64:5]',
						camelCase: true
					}
				}
			},
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /.css$/,
				loader: 'style-loader!css-loader?camelCase&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
				options: {
					autoprefixer: true
				}
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.vue']
	}
};
