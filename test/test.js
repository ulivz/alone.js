;(function () {

		function add(count) {
			return ++count;
		}
		var metadata = {
			name: 'toxichl',
			words: 'Hello World!'
		}

		module.exports = {
			add: add,
			metadata: metadata
		};
		// in ES6 you can write like this：module.exports = {add}

	}
)()