const fs = require('fs')
const filepath = process.platform === "linux" ? '/dev/stdin' : 'input.txt'

let input = fs.readFileSync(filepath).toString().trim().split('\n')

let inputArr = [];
for(let i = 1; i< input.length; i++){
    inputArr.push(input[i].split(' '))
}




//일단은 조합으로 풀고 
for(let j = 0; j<inputArr.length; j++){
    inputArr[j][0] = parseInt(inputArr[j][0])
    inputArr[j][1] = parseInt(inputArr[j][1])
    
    
    let mother = factorial(inputArr[j][0]) // 분모
    
    let sonNumber = inputArr[j][1] - inputArr[j][0] // 13 29
    let son = 1
    for(let k = inputArr[j][1]; k>sonNumber;  k--){
            son = son * k
    }

    console.log((son/mother).toString())
}    


//Dp는 나중에 ㅇㅇ

function factorial(number){
    let res = 1
    for(let i = 2; i<=number; i++){
        res = res * i;
    }
    return res
}