var fs = require('fs')
var inputs = fs.readFileSync('./input.txt').toString().split('\n');
// split('\n'을 기준으로 나뉜다.)

var firstLine = inputs[0].split(" ")
// 첫번째 라인은 5 21
var secondLine = inputs[1].split(" ").map(item => parseInt(item))
// 두번째 라인은 5 6 7 8 9

var res = 0
//결과값을 저장해줄 변수

//세 개의 수를 뽑아서 21과 가장 근접한값을 뽑아야 함으로
//일일이 모든 경우의 수를 다 더해야 한다.
// 일명 : '브루트포스 알고리즘' 이라는것입니다.

//총 3개의 for문을 돌려줍니다.
//for문의 조건문에서는 i는 5개중 3번째 index까지만 가야 나머지 세가지의 수로 모든 경우의 수를 구할 수 있습니다.
for(var i = 0; i < parseInt(firstLine[0]-2); i++)
{
    for (var j =i+1; j< parseInt(firstLine[0]-1); j++) 
    {
        for (var k = j+1; k<parseInt(firstLine[0]); k++)
        {
            //조건문에서는 21보다 작거나 같고 // 세 수를 더 한 값이 결과값에 계속 저장을 해줌으로써 가장 근접한 수를 찾아냅니다.
            if( (secondLine[i]+secondLine[j]+secondLine[k]) <= firstLine[1] && res < secondLine[i]+secondLine[j]+secondLine[k])
            {
                res = secondLine[i]+secondLine[j]+secondLine[k]
                
            }
        }
    }
}
console.log(res)



// var test1 = parseInt(input[0])
// var test2 = parseInt(input[1])

// console.log(test1 + test2)


