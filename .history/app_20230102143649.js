const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let count = Number(fs.readFileSync('./input.txt').toString());
const memo = {
    1:1,
    2:2
}

for(let i =3; i<=count; i++){
    memo[i] = memo[i-1] + memo[i-2]
}

console.log(memo[count]);