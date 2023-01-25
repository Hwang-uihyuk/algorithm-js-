const fs = require('fs')

const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'

let input = fs.readFileSync(filepath).toString().trim().split('\n')

let [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((v) => +v); //.map((v) => Number(v)

console.log(arr)
input = input.map(val => +val)



let dp = new Array(input[0]).fill(0)

dp[0] = arr[0] ;
dp[1] = arr[0] + arr[1];

