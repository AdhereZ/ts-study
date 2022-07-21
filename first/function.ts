// 1
function sum(a: number, b: number): number {
     return a + b
}

console.log(sum(1, 2));


// 2
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

console.log(mySum(1, 3));


// 3
function push(arr:any[], ...args:any[]) {
    args.forEach(v => {
        arr.push(v)
    })
}

let a:any[] = []
push(a, 1, 3, 4, 5)
console.log(a);


// 4
type Combinable = number | string
// function add(a: number, b: number): number
// function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();  // 这里一定要tostring 不然会报错
      }
      return a + b;
}

console.log(add('a', 'b'));
// console.log(add('a', 5));
// console.log(add('a', 5));
