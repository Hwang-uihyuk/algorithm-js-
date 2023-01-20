const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filepath).toString()

//번갈아가면서 돌을 가져간다.
//      상근 / 창영

//n을 다 대입해보니
if (input % 2 === 0)
    console.log("CY")
else
    console.log("SK")

