(function (root, factory) {
	if (
		typeof exports === 'object' &&
		typeof require === 'function' &&
		typeof global === 'object') {
		return factory('node');
		// Browser
	} else if (typeof window !== 'undefined') {
		return factory(window);
	}
})(this, function (root) {

	if (!root) {
		throw new Error('[Error] The node.js environment does not need to use this plugin')
	}

	root.module = new Object()

	Object.defineProperty(root.module, 'exports', {

		set: function (_) {

			if (typeof _ !== 'object') {
				throw new Error('[Unexpected Export] Only accept a object in module.exports')

			} else {
				for (var key in _) {
					root.module[key] = _[key]
				}
			}
		}
	})

	root.exports = module.exports

	root.require = function (ref) {
		for (var _ in root.module) {
			if (_ === ref) {
				console.log(1)
				return module[_]
			}
		}
		for (var _ in root.exports) {
			if (_ === ref) return exports[_]
		}
	}
})