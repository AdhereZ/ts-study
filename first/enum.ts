// 比如人的性别我们用数字来区分，数字存储更省空间
let people: {name: string, gender: number} = {
    name: 'tom',
    gender: 0   // 这里就不知道0代表男还是女的
}


enum Gender {
    Male, // 默认Male=0
    Female // 默认Female=1
}

let people1: {name: string, gender: number} ={
    name: 'bob',
    gender: Gender.Male
}

console.log(people1.gender === Gender.Female);
