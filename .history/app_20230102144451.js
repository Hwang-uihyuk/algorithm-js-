const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

let count = fs.readFileSync(filepath).toString();
count = parseInt(count)

const memo = {
    1:1,
    2:2,
}

for(let i =3; i<=count; i++){
    memo[i] = memo[i-1] + memo[i-2]
}

console.log(memo);