# alone.js

一个极简的运行在浏览器上的 CommonJS 模块加载器

## Quick Start

在你的页面中 body 中引入：

```html
<script src="https://unpkg.com/alone.js@1.0.0/dist/alone.js"></script>
```

新建两个文件 `add.js`、`index.js`, 在页面中引入：

```html
<script src="add.js"></script>
<script src="index.js"></script>
```

 `test.js`的内容：

```js
;(function () {

	function add(count) {
		return ++count;
	}
	var metadata = {
    	name: 'Chen Haoli',
    	words: 'Hello World!'
    }

	module.exports = {
		add: add,
		metadata: metadata
	};
	// in ES6 you can write like this：module.exports = {add}

}
)()
```

`index.js`的内容：

```js
	;(function () {
		
		var add = require('add')
		var data = require('metadata')
		
		console.log(add(1))   // 1
		console.log(data.name + ' says ' + data.word)   // toxichl says Hello World!
	})()
```


