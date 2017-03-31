;(function () {

		function add(count) {
			return ++count;
		}
		var metadata = {
			name: 'toxichl',
			words: 'Hello World!'
		}


		// in ES6 you can write like this：module.exports = {add}

		exports.year = '1994'

		module.exports = {
			add: add,
			metadata: metadata
		};

	}
)()