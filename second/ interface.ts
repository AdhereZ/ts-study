interface myInter {
    name: string,
    age: number
}

interface myInter {
    salary: number
}


// 将两个接口加起来
const obj: myInter = {
   name: 'tom',
   age: 14,
   salary: 2000
}





// 定义类的接口
interface inter {
    age: number,
    sayHello(): void
}

// 定义类时可以实现上面这个接口
// 实现接口就是使得自己定义的类满足接口的要求
class People implements inter {
    age: number
    constructor(age: number) {
        this.age = age
    }
    sayHello(): void {
        console.log("hello world");
    }
}