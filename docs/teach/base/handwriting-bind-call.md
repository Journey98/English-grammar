## 手写 bind

首先要思考 bind 功能是改变 this, 传入参数,返回一个新的改变过 this 的函数, 并且返回的新函数还可以再次执行传参

bind api

```js
function xiaoming(params) {
	console.log(arguments, this.name)
}
xiaoming.bind({ name: 'heisang' }, 234234)(23424)
```

使用 es6 语法实现

```js
function xiaoming(params) {
	console.log(arguments, this.name)
}

Function.prototype._bind = function (forwrad, ...args) {
	// 此时this对象指向调用者
	const target = this
	return function (..._args) {
		_args = [...args, ..._args]
		target.call(forwrad, _args)
	}
}

const newFunc = xiaoming._bind({ name: '_bind' }, 234)

newFunc(234234)
```

## 手写 call

call 的功能:改变 this 指向, 并且可以传入参数, 参数是数组形式


call api

```js
function func(params) {
	console.log(this, arguments)
}

func.call({ name: 'call' }, 23432)
```
实现

```js

function func(params) {
	console.log(this, params)
}

Function.prototype._call = function (target, ...args) {
	// this 指向调用者
	// 此处是为了保持 this 的原型对象
	target.__proto__ = this.prototype
	// 利用 this 的隐式绑定使 this 指向 target
	target.func = this
	target.func(...args)
}

func._call({ name: '_call' }, 23424, 234324)

```