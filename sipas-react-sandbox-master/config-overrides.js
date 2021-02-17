// @flow
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true, // change importing css to less
		// style: 'css',
	}),

	addLessLoader({
		javascriptEnabled: true,
		// modifyVars: {
		// 	"@primary-color": "#1DA57A"
		// }
	}),

	addReactRefresh({
		disableRefreshCheck: true,
	})
);
