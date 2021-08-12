var ReactNative = require('react-native')
var disabled =
	ReactNative.Platform.OS === 'ios'
		? 'false' === 'true'
		: ReactNative.Platform.OS === 'android'
		? 'true' === 'true'
		: true

if (disabled) {
	module.exports = { disabled: true }
} else {
	var bridge = ReactNative.NativeModules['RNAnalyticsIntegration_Facebook_App_Events']

	if (!bridge) {
		throw new Error('Failed to load Facebook App Events integration native module')
	}

	module.exports = bridge.setup
}
