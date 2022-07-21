// 元祖就是指定长度的数组，还可以指定每个位置元素的类型

let x2:[string, number]

x2 = ['a', 1] // OK
// x = [1, 'a'] // error
// x = ['a', 1, 1] // error



// 元祖的解构赋值
let x1:[string, number, number] = ['tom', 20, 5000]
let [nicename, age, salary] = x1
console.log(`nicename: ${nicename}`);
console.log(`age: ${age}`);
console.log(`salary: ${salary}`);



// 元祖的可选元素
// let position: [number, number?, number?] 
// position = [1]
// position = [1, 2]
// position = [1, 2, 3]

type position = [number, number?, number?] 
let x:position = [1]
let xy:position = [1, 2]
let xyz:position = [1, 2, 4]
console.log(x.length);
console.log(xy.length);
console.log(xyz.length);


// 元祖剩余元素

type a = [number, ...string[]]  // 一个数字加若干个字符串(可以是零个)

let b: a = [1, 'a', 'b', 'c']



// 只读类型的元祖
let p: readonly [number, string] = [1, 'number']

console.log(p);
// p[0] = 1  // error


