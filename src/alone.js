;(function (root, factory) {

	// Node Environment
	if (typeof exports === 'object' &&
		typeof require === 'function' &&
		typeof global === 'object') {
		return factory('node');

		// Browser Environment
	} else if (typeof window !== 'undefined') {
		return factory(window);
	}
})(this, function (root) {

	if (!root) return;

	// Store
	root.module = {}

	Object.defineProperty(root.module, 'exports', {

		get: function () {
			return {}
		},
		set: function (_mol) {

			if (typeof _mol !== 'object') {
				throw new Error('[Unexpected Export] Only accept a object in module.exports')

			} else {
				for (var key in _mol) {
					root.module[key] = _mol[key]
				}
			}
		}
	})

	root.exports = module.exports

	root.require = function (ref) {
		for (var _ in root.module) {
			if (_ === ref) {
				return module[_]
			}
		}
		for (var _ in root.exports) {
			if (_ === ref) return exports[_]
		}
	}
})