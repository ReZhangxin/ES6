# 数组排序

> 将乐队按照乐曲名称进行排序，曲名前面的a/an/the的单词不参与排序。

## 相关知识

### 正则表达式

创建一个正则
`var areaCode = new RegExp(/[0-9]{3}/)`
`var phoneNumber = new RegExp(/^\d{3}-?\d{4}$/)`

关于正则表达式主要是如何解读搜索部分

![RegExp01](http://ovbz10vsg.bkt.clouddn.com/regexp-min.png)

![RegExp02](http://ovbz10vsg.bkt.clouddn.com/regexp02-min.png)

/^(a |an |the )/ig ^代表以什么什么开头，^(a |an |the )代表以a或者an或者the开头，i代表不区分大小写，g代表整个字符串全局搜索。

### `replace`

```js
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");

// oranges are round, and oranges are juicy.
console.log(newstr);
```

### `sort`

> 该方法在适当的位置对数组的元素进行排序，并返回数组。

```js
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort();
// ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2];
scores.sort();
// [1, 10, 2, 21
// 注意10在2之前,
// 因为在 Unicode 指针顺序中"10"在"2"之前

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort();
// ['1 Word', '2 Words', 'Word', 'word']
// 在Unicode中, 数字在大写字母之前,
// 大写字母在小写字母之前.
```