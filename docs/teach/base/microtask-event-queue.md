# 任务执行顺序(理解还是有些朦胧)

setTimeout 创建一个任务队列中的等待执行的任务，所谓的异步只不过是假象

[setTimeout 真的是异步吗](https://blog.csdn.net/u014756827/article/details/52644737)

## 宏任务

产生条件

```js
script 全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有 IE10 支持，具体可见 MDN）、I/O、UI Rendering
```

执行场景

执行来自任务队列中的任务时，在每一次新的事件循环开始迭代的时候运行时都会执行队列中的每个任务。在每次迭代开始之后加入到队列中的任务需要在下一次迭代开始之后才会被执行.

举个例子:

代码已经开始执行(迭代开始)，执行过程中 setTimeout 创建一个延时任务, 所以创建的延时任务只能等到下一次迭代开始才会执行

## 微任务

产生条件

```js
Process.nextTick //（Node独有）
Promise
Object.observe //废弃)
MutationObserver
```

执行场景

- 普通任务结束之后

- 微任务可以添加新的微任务到队列中，并在下一个任务开始执行之前且当前事件循环结束之前执行完所有的微任务

```js
console.log('script start')

setTimeout(function () {
	console.log('setTimeout')
}, 0)

Promise.resolve()
	.then(function () {
		console.log('promise1')
	})
	.then(function () {
		console.log('promise2')
	})

console.log('script end')
```

执行顺序

script start => script end => promise1 => promise2 => setTimeout

![20210914114949](https://cdn.jsdelivr.net/gh/azhen98/A-week-to-learn@assert/image/20210914114949.png)

解释:

Tasks 任务队列

microtasks 微任务队列

js stack js 调用栈

log 控制台输出

run script : 代码从上往下正常执行

script: 当前代码的调用栈(就是从上往下执行)

在图中, `run script` 在执行逻辑中创建了微任务和新的 `setTimeout callback`，当 `script` 执行结束后（此时执行栈为空,任务执行完毕），执行微任务队列，微任务执行完毕之后, 然后继续执行排队的任务(迭代)

[执行流程图示](https://azhen98.github.io/A-week-to-learn/index.html)

解释

执行任务

![20210913164618](https://cdn.jsdelivr.net/gh/azhen98/A-week-to-learn@assert/image/20210913164618.png)

任务执行过程中加入了等待的新任务和微任务，现在执行微任务(当调用栈为空时执行微任务)

![20210913164720](https://cdn.jsdelivr.net/gh/azhen98/A-week-to-learn@assert/image/20210913164720.png)

微任务执行完成后， 开始执行任务队列

![20210913164806](https://cdn.jsdelivr.net/gh/azhen98/A-week-to-learn@assert/image/20210913164806.png)

[国外博客](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)