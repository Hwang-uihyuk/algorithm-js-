const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

let count = fs.readFileSync(filepath).toString();
count = parseInt(count)

for(let i = 0; i<=count; i++)
{
    memo[i] = 0
}
const memo[1] = 1
const memo[2] = 2
for(let i =3; i<=count; i++){
    memo[i] = (memo[i-1] + memo[i-2])%10007
}

console.log(memo[count]);
