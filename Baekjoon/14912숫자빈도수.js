var fs = require('fs')
var filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(filepath).toString().split(' ')

var N = parseInt(input[0])
var d = parseInt(input[1])

var arr= []
var cnt = 0

for(var i = 1; i <= N; i++){
    arr.push(i)
};
//일단 배열을 하나생성해서, push해줍니다.
let num = String(arr.join(''))
//일단 배열에 있는 숫자들을 문자열로 만들어줍니다.
let numArr = num.split('').map(n=>parseInt(n));
//그 후에 다시 split함수를 써서 각 숫자들로 쪼개줍니다.
for(let i = 0; i<num.length; i++){
    if(numArr[i]===d)
    cnt ++
}
//그리고 배열의 크기만큼 for문을 돌면서 그 숫자가 몇개들어있는지 세주면 됩니다.
console.log(cnt)