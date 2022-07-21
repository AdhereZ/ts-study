/* 定义函数或类时，会遇到参赛或属性不确定的情况。比如定义一个函数时，
传的参数可以是数字也可以是字符串，数字就加起来，字符串就拼起来； */


function fn<T> (a: T) {
    return a
}

console.log(fn<string>('ssss'));

// 不指定类型
console.log(fn(10));


// 指定多个泛型
function fn2<T, K> (a:T, b:K) {
    console.log(a);
    console.log(b);
}
fn2<number, number>(1 ,2)
fn2<string, number>('s' ,2)



interface inter1 {
    length: number
}

function fn3<T extends inter1> (a: T): number {
       return a.length
}

console.log('length: ', fn3('abcdef'));  // 字符串也有length属性
console.log('length: ', fn3({length: 90}));  // 对象有length属性




// 类中使用泛型
class Test<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}

let zs = new Test<string>('abc')
let cs = new Test<number>(123)

