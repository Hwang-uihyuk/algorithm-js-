
const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let n = fs.readFileSync(filepath).toString().trim()

// 재귀호출
function fib(n){
    if(n ===1 || n === 2){
        return 1;
    }
    else
    { return fib(n-1) + fib(n-2) }

    }

// 동적 프로그래밍 
// 직접 함수에 n에 3부터 쭉 넣어보면 답이 나옴 
// function fiboDp(n) {
//     f[1] = 1
//     f[2] = 1
//     for(let i = 3; i<=n; i++){
//         f[i] = f[i - 1] + f[i - 2];
        
//     return f[n]
//     }
// }

console.log(fib(n), n-2)