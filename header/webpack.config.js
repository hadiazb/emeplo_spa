const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'bits',
		projectName: 'header',
		webpackConfigEnv,
		argv,
	});

	return merge(defaultConfig, {
		// modify the webpack config however you'd like to by adding to this object
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
	});
};
