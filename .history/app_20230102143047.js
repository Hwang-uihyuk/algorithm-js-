var fs = require('fs')
var filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(filepath).toString()

let memo = {
    1 : 1,
    2 : 2 
}

for(let i = 3; i<=input; i++){
    memo[i] = memo[i-1] + memo[i-2]
    console.log(memo)
}

console.log(memo[count]);

