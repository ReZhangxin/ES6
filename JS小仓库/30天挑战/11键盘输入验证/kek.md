# 键盘输入序列的验证指南

## 解决思路

* 1、指定可激发的特效字符串
* 2、监听字符串的变化
* 3、事件监听
* 4、正则表达式判断字符串输入
* 5、处理数据，符合条件时，调用 `cornify_add()`

## 1、指定可激发的特效字符串

> 声明一个空数组`passed`用于键盘输入字符的处理
> 再声明一个暗号`secretCode`

```js
const passed = [];
const secrectCode = 'love';
```

## 2、监听字符串的变化

```js
input_word_pre.innerText = passed.join('');
input_word_af.innerText = pressed.join('');
```

## 3、事件监听

> `addEventListener`通过keyup监听键盘输入的变化，当键盘弹起时，调用callback函数。

```js
window.addEventListener('keyuo',callback);
```

## 4、正则表达式判断字符串的输入

```js
const regex = new RegExp('[A-z]','gi');
//判断输入的键盘上的字母是A - z的字符
if(e.key.length === 1 && e.key.match(regex)){
    //...
}
```

## 5、处理输入，在符合条件时，调用 `cornify_add()`

```js
//当pressed数组里面的字符个数大于密钥字符串的个数时，每新增一个字符，将最前面一个删掉
pressed.splice(0, pressed.length - secretCode.length);
//当`pressed`数组里面的连续的字符连接成的字符串中包涵我们给定的秘钥时，调用`cornify_add();`函数
if (pressed.join('').includes(secretCode)) {
    cornify_add();
}
```