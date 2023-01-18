const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filepath).toString().trim()

const n = parseInt(input)
// 첫번째 숫자 숫자화 시키기.

//n이 10이니깐 
let arr = new Array(n+1).fill(0)

arr[0] = 0
arr[1] = 1

for(let i = 2; i<=n; i++){
    arr[i] = BigInt(arr[i-1]) + BigInt(arr[i-2])
    console.log(arr[i])
}

console.log(arr[n].toString())
