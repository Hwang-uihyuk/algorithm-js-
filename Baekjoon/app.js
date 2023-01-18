const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filepath).toString().trim().split('\n')
pnum1 = input[0]
pnum2 = input[1]
console.log(pnum1)
let s = ""

for(let i = 0; i<8; i++){
    s += pnum1[i]
    s += pnum2[i]    
}

while (s.length > 2){
    let val = ""
    for(let j = 0; j<8; j++){
        let n = Number(s[j]) + Number(s[j+1])
        console.log(n)
        val += toString(n%10)
    }
    
    s = val;
    console.log(s)
}
console.log(s)