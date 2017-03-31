# alone.js

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![Travis](https://img.shields.io/badge/download-%3C1kb-red.svg)]()


A tiny browser-side `CommonJS` module loader (`~539bytes`).

> 中文`README`请移步：[README_zh](README_zh.md)

## Quick Start

import `alone.js` in `<body>` of your page :

```html
<script src="https://unpkg.com/alone.js@1.0.1/dist/alone.min.js"></script>
```

Create two new files `add.js`,` index.js`, import in the page:

```html
<script src="add.js"></script>
<script src="index.js"></script>
```

Content of `test.js`：

```js
;(function () {

    function add(count) {
		return ++count;
	}
	var metadata = {
		name: 'Chen Haoli',
		words: 'Hello World!'
    }
	exports.year = '1994'
	module.exports = {
		add: add,
		metadata: metadata
	};
	// in ES6 you can write like this：module.exports = {add}

}
)()
```

Content of `index.js`：

```js
;(function () {
	
	var add = require('add')
	var data = require('metadata')
	
	console.log(add(1))   // 2
	console.log(data.name + ' says ' + data.word)   // toxichl says Hello World!
	console.log(year)   // 1994
})()
```

Does the above wording be similar to the `CommonJS` wording of `node.js`?


## Statement

This is just a toy, do not use it for the production environment.


