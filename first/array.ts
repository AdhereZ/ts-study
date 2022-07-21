// 元素为字符串的数组
let arr:string[] = ["1", "2"]
let Arr: Array<string> = ['2', '3']

// 元素为联合类型的数组
let arr1:(number | string)[]

arr1 = [1, 'a', 'v', 4]
console.log(arr1);


// 定义制定联合类型数组
interface ArrObj {
    name: string,
    age: number
}

let arr2:ArrObj[] = [{name: 'aa', age: 2}, {name: 'bb', age: 13},]
console.log(arr2);
