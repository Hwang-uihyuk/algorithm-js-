const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filepath).toString()

console.log("Hello World!")
