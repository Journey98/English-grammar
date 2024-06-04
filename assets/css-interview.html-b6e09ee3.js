import{_ as a,o as n,c as s,a as e}from"./app-9ce4813d.js";const i={},t=e(`<h1 id="_1-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的" tabindex="-1"><a class="header-anchor" href="#_1-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的" aria-hidden="true">#</a> 1. 介绍一下标准的css的盒子模型?与低版本IE的盒子模型有什么不同的?</h1><p>标准盒子模型:宽度 = 内容的宽度(content) + padding + margin + border 低版本IE盒子模型: 宽度 = 内容的宽度(content + padding + border) + margin</p><h1 id="_2-box-sizing属性" tabindex="-1"><a class="header-anchor" href="#_2-box-sizing属性" aria-hidden="true">#</a> 2. box-sizing属性?</h1><p>用来控制元素的盒子模型的解析模式,默认content-box</p><ul><li>content-box: W3C的标准盒子模型,设置元素height/width属性指的是content部分的高/宽</li><li>border-box:IE传统盒子模型。设置元素的height/width属性值得是border + padding + (content部分的宽/高)</li></ul><h1 id="_3-css选择器有哪些-那些属性可以继承" tabindex="-1"><a class="header-anchor" href="#_3-css选择器有哪些-那些属性可以继承" aria-hidden="true">#</a> 3. css选择器有哪些?那些属性可以继承?</h1><p>css选择符: id选择器、类选择器、标签选择器、相邻选择器、子选择器、后代选择器、通配符选择器、属性选择器、伪类选择器 可继承的属性 ： <code>font-size</code>,<code>font-family</code>,<code>color</code> 不可继承的样式: <code>border,padding,margin,width,height</code> 优先级: <code>!important&gt;id&gt;class&gt;tag</code>(就近原则)</p><h1 id="_4-css优先级算法如何计算" tabindex="-1"><a class="header-anchor" href="#_4-css优先级算法如何计算" aria-hidden="true">#</a> 4. css优先级算法如何计算?</h1><p>元素选择符:1 class选择符:10 id选择符:100 内联:1000</p><blockquote><ol><li><code>!important</code> 声明的样式优先级最高,如果冲突在进行计算</li><li>如果优先级相同,最后出现的样式优先级最高</li><li>继承得到的样式优先级最低 比如: <code>font-size</code></li></ol></blockquote><h1 id="_5-css新增伪类有哪些" tabindex="-1"><a class="header-anchor" href="#_5-css新增伪类有哪些" aria-hidden="true">#</a> 5. css新增伪类有哪些</h1><blockquote><p>下面同时必有条件皆为同类型元素</p></blockquote><p>p:first-of-type 选择属于其父元素的首个元素</p><p>p:last-of-type 选择属于其父元素的最后元素</p><p>p:only-of-type 选择属于其父元素唯一的元素</p><p>p:only-child 选择属于其父元素的唯一一个子元素</p><p>p:nth-child(2) 选择属于其父元素的第二个子元素</p><p>:enabled :disabled 表单空禁用状态</p><p>:checked 单选框或复选框被选中</p><h1 id="_6-如何居中div-如何绝对定位的div居中" tabindex="-1"><a class="header-anchor" href="#_6-如何居中div-如何绝对定位的div居中" aria-hidden="true">#</a> 6. 如何居中div? 如何绝对定位的div居中</h1><ol><li>div</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span>600px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span>0 auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>绝对定位</li></ol><ul><li>margin + left</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span> // 宽度必须一定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>transform + left</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span>
<span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-css有哪些新特性" tabindex="-1"><a class="header-anchor" href="#_7-css有哪些新特性" aria-hidden="true">#</a> 7. css有哪些新特性</h1><ol><li><code>RGBA,opacity</code></li><li><code>background-image, background-origin(content-box/border-box/padding-box), background-size, background-repeat</code></li><li><code>word-wrap(单词换行) word-wrap:break-word</code></li><li>文字阴影:<code>text-shadow:5px 5px 5px #FF0000;</code>（水平阴影，垂直阴影，模糊距离，阴影颜色）</li><li><code>font-face</code> 自定义字体</li><li><code>border-radius</code> 圆角</li><li>border-image 边框图片</li><li><code>box-shadow</code> 盒子阴影</li><li><code>@media</code> 媒体查询</li></ol><h1 id="_8-css3的felx布局-其新特性" tabindex="-1"><a class="header-anchor" href="#_8-css3的felx布局-其新特性" aria-hidden="true">#</a> 8. css3的felx布局,其新特性</h1><p>该布局是为了提供一种更高效的方式来对容器中的条目进行布局,对齐和分配空间,传统布局中,block布局是在垂直方向上由上到下依次排列,inline布局是在水平方向上排列,flex布局没有方向限制,开发人员自由操作 使用场景:弹性布局适合于移动端前端开发,在Android和iphone上也完美支持</p><h1 id="_9-用css创建一个三角形的原理是什么" tabindex="-1"><a class="header-anchor" href="#_9-用css创建一个三角形的原理是什么" aria-hidden="true">#</a> 9. 用css创建一个三角形的原理是什么?</h1><p>设置宽度高度为0,设置边框样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">border-top</span><span class="token punctuation">:</span>40px soild transparent<span class="token punctuation">;</span>
<span class="token property">border-bottom</span><span class="token punctuation">:</span>40px soild transparent<span class="token punctuation">;</span>
<span class="token property">border-left</span><span class="token punctuation">:</span>40px soild transparent<span class="token punctuation">;</span>
<span class="token property">border-right</span><span class="token punctuation">:</span>40px soild #000<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-常见的兼容性问题" tabindex="-1"><a class="header-anchor" href="#_10-常见的兼容性问题" aria-hidden="true">#</a> 10. 常见的兼容性问题</h1><ol><li>不同浏览器的margin和padding不一样</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>ie6 双边距:块属性标签float后,又有横行的margin情况下,在IE6显示margin比设置的大。hack: <code>display:inline;</code> 将其转化为行内属性。</li></ol><h1 id="_11-为什么要初始化css样式" tabindex="-1"><a class="header-anchor" href="#_11-为什么要初始化css样式" aria-hidden="true">#</a> 11. 为什么要初始化css样式</h1><p>因为浏览器的兼容问题,不同浏览器对有些标签的默认值是不同的,如果没对css初始化往往会出现浏览器之间的页面显示差异</p><h1 id="_12-display-none与visibility-hidden-的区别" tabindex="-1"><a class="header-anchor" href="#_12-display-none与visibility-hidden-的区别" aria-hidden="true">#</a> 12. display:none与visibility:hidden 的区别</h1><p>display:none 不显示对应的元素,在文档布局中不再分配空间(回流-重绘) visibility:hidden 隐藏对应元素,在文档布局中仍然保留原来的空间(重绘) vue中的v-if是是否渲染元素 v-show相当于display:none</p><h1 id="_13-对bfc规范-块级上下文-block-formatting-context-的理解" tabindex="-1"><a class="header-anchor" href="#_13-对bfc规范-块级上下文-block-formatting-context-的理解" aria-hidden="true">#</a> 13. 对BFC规范(块级上下文:block formatting context) 的理解</h1><p>BFC规定了内部的block Box如何布局 定位方案:</p><ol><li>内置的Box会在垂直方向上一个接一个放置</li><li>Box垂直方向的距离由margin决定,属于同一个BFC的两个相邻Box的margin会发生重叠</li><li>每个元素的margin box的左边,与包含块border box的左边相接触</li><li>BFC的区域不会与float box 重叠</li><li>BFC是页面上的一个独立容器,容器内部的元素不会影响到外部的元素</li><li>计算BFC的高度是,浮动元素也会参与计算 触发BFC条件</li><li>根元素即html 本身就是BFC</li><li>float的值不为none(默认)</li><li>overflow的值不为visible(默认)</li><li>display的值为inline-block,table-cell,table-caption</li><li>position的值为absolute和fixed</li></ol><ul><li>Box垂直方向的距离由margin决定,属于同一个BFC的两个相邻Box的margin会发生重叠</li></ul><p><img src="https://i.loli.net/2021/09/01/UuVz4lLxr16SQf9.png" alt="image.png"></p><p><img src="https://i.loli.net/2021/09/01/1aHxWGIuhRb85VQ.png" alt="image.png"></p><h1 id="_14-设置元素浮动后-该元素的display值是多少" tabindex="-1"><a class="header-anchor" href="#_14-设置元素浮动后-该元素的display值是多少" aria-hidden="true">#</a> 14. 设置元素浮动后,该元素的display值是多少?</h1><p>自动被设置为 display:block</p><h1 id="_15-移动端用过媒体查询吗" tabindex="-1"><a class="header-anchor" href="#_15-移动端用过媒体查询吗" aria-hidden="true">#</a> 15. 移动端用过媒体查询吗?</h1><p>通过媒体查询可以为不同大小和尺寸的媒体定义不同的css,适应相应的设备的显示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xxx.css<span class="token punctuation">&#39;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>only screen and(max-device-width:480px)<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span><span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span>480px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-css优化-提高性能的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_16-css优化-提高性能的方法有哪些" aria-hidden="true">#</a> 16. css优化,提高性能的方法有哪些</h1><ol><li>避免过渡约束</li><li>避免后代选择器</li><li>避免链式选择符</li><li>使用紧凑的语法</li><li>避免不必要的命名空间</li><li>避免不必要的重复</li><li>最好使用语义化的名字。一个好的类名应该是他是什么而不是像什么</li><li>避免使用!important,可以选择其他选择器</li><li>尽可能地精简规则,你可以和合并同类里面的重复规则</li></ol><h1 id="_17-浏览器是怎么样解析css选择器的" tabindex="-1"><a class="header-anchor" href="#_17-浏览器是怎么样解析css选择器的" aria-hidden="true">#</a> 17. 浏览器是怎么样解析css选择器的</h1><p>css选择器是从右向左解析的。若从左向右的匹配,发现不符合规则,需要进行回溯,会损失很多性能。若从右向左匹配,先找到所有的最右节点,对于每一个节点,向上寻找其父节点直到找到根元素或满足条件的匹配规则,则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一部就筛选掉了大量的不符合条件的最右节点，而从左向右的匹配规则的性能的都浪费在了失败的查找上面。 而在css解析完毕后,需要将解析的结果与DOM Tree 的内容一起进行分析建立一刻Render Tree,最终用来进行绘图。在建立Render Tree时,浏览器就要为每个Dom Tree中的元素根据css的解析结果来确定生成怎样的Render Tree</p><p>示例:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>两种情况
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--!正确--</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--!---错误-</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
        这是空标签
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选择器 div p em</p><p>从右向左规则 首先匹配em 直接匹配到第一个含有em标签的 dom树</p><p>从左向右 如果是第二种错误的树 当查找到 p标签发现查找失败了,就要重新回到最初的div查找 =&gt; p =&gt; em 多次回溯造成效率低</p><h1 id="_18-在网页中的应该会用奇数还是偶数的字体" tabindex="-1"><a class="header-anchor" href="#_18-在网页中的应该会用奇数还是偶数的字体" aria-hidden="true">#</a> 18. 在网页中的应该会用奇数还是偶数的字体?</h1><p>使用偶数字体。偶数字号相对更容易和web设计的其他部分构成比例关系.window自带的顶针宋体从Vista开始只提供12、14、16 px这三个大小的点阵,而13\\15\\17\\px时用的是小一号的点。（即每个字站的空间大了1px,但是点阵没变),于世略显稀疏。</p><h1 id="_19-margin和padding分别是和什么场景的使用" tabindex="-1"><a class="header-anchor" href="#_19-margin和padding分别是和什么场景的使用" aria-hidden="true">#</a> 19. margin和padding分别是和什么场景的使用？</h1><p>何时使用margin：</p><ol><li>需要在border外侧添加空白</li><li>空白处不需要背景色</li><li>上下相连的两个盒子之间的空白，需要相互抵消时。</li></ol><p>何时使用padding</p><ol><li>需要在border内测添加空白</li><li>空白处需要背景颜色</li><li>上下想连的两个盒子的空白，希望为两者之和。</li></ol><p>兼容性问题：在IE5，IE6中，float盒子指定margin，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决</p><h1 id="_20-元素竖向的百分比设定是相对于容器的高度吗" tabindex="-1"><a class="header-anchor" href="#_20-元素竖向的百分比设定是相对于容器的高度吗" aria-hidden="true">#</a> 20. 元素竖向的百分比设定是相对于容器的高度吗？</h1><p>当按照百分比设定一个元素的宽度是，它是相对于父容器的宽度计算的，但是，对于一些竖向距离的属性，例如<code>padding-top,padding-bottom,margin-top,margin-bottom</code>等,当按百分比设定他们时,依据的也是<em>父容器的宽度</em>,而不是高度。</p><h1 id="_21-before和-after-中双冒号和单冒号有什么区别-解释一下这两个伪元素的作用" tabindex="-1"><a class="header-anchor" href="#_21-before和-after-中双冒号和单冒号有什么区别-解释一下这两个伪元素的作用" aria-hidden="true">#</a> 21. ::before和:after 中双冒号和单冒号有什么区别?解释一下这两个伪元素的作用</h1><ol><li>单冒号(:)用于css3伪类,双冒号(::)用于css3伪元素</li><li>::before就是以一个字元素的存在,定义在元素主题内容之前的一个伪元素。并不存在于dom之中,只存在页面之中。 ：before和：after这两个伪元素，是在css2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，随着web的进化，在css3的规范里,伪元素的语法被修改成使用双冒号,成为::before ::after</li></ol><h1 id="_22-line-height-如何理解" tabindex="-1"><a class="header-anchor" href="#_22-line-height-如何理解" aria-hidden="true">#</a> 22. line-height 如何理解</h1><p>行高是指一行文字的高度,具体说是两行文字间基线的距离。css中起高度作用的是height和line-height,没有定义height属性,最终其表现line-height 多行文本垂直居中:需要设置display:inline-block</p><p><img src="https://i.loli.net/2021/09/01/T12FR98cKNLeixU.png" alt="13674153-69927f4a414b6262.png"></p><p>行高是指上下文本行的基线间的垂直距离，即图中两条红线间垂直距离。</p><h1 id="_23-让页面里的字体变清晰-变细用css怎么做" tabindex="-1"><a class="header-anchor" href="#_23-让页面里的字体变清晰-变细用css怎么做" aria-hidden="true">#</a> 23. 让页面里的字体变清晰,变细用css怎么做</h1><blockquote><p>非标准: 该特性是非标准的，请尽量不要在生产环境中使用它！</p></blockquote><p><code>-webkit-font-smoothing</code> 在window系统下没有起作用,但是在IOS上起作用 <code>-webkit-font-smoothing:antialiased</code> 平滑</p><h1 id="_24-手写动画-最小的时间间隔是多久" tabindex="-1"><a class="header-anchor" href="#_24-手写动画-最小的时间间隔是多久" aria-hidden="true">#</a> 24. 手写动画,最小的时间间隔是多久</h1><p>大部分显示器的频率是60hz,即一秒刷新60次,所以理论上最小间隔为1/60 * 1000ms = 16.7ms\\</p><h1 id="_25-style-标签写在body后与body前有什么区别" tabindex="-1"><a class="header-anchor" href="#_25-style-标签写在body后与body前有什么区别" aria-hidden="true">#</a> 25. style 标签写在body后与body前有什么区别</h1><p>页面加载是自上而下的,应该先加载样式 写在body后面,由于浏览器以逐行方式对HTML文档进行解析,当解析样式表会导致浏览器停止之前的渲染,等待加载并且解析完成样式继续渲染,可能会出现页面闪烁的问题(样式失效,FOUC)</p>`,86),p=[t];function l(o,c){return n(),s("div",null,p)}const r=a(i,[["render",l],["__file","css-interview.html.vue"]]);export{r as default};