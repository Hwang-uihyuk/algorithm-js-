const fs = require('fs')
const filepath = process.platform === "linux" ? '/dev/stdin' : 'input.txt'
let input = fs.readFileSync(filepath).toString()

input = parseInt(input)
let fibo = []
fibo[0] = BigInt(0)
fibo[1] = BigInt(1)

for(let i = 2 ; i<=input; i++){
    fibo[i] = BigInt(fibo[i-1]) + BigInt(fibo[i-2])
}
console.log((fibo[input]).toString())