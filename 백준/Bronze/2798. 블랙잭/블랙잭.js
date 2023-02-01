var fs = require('fs')
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
// split('\n'을 기준으로 나뉜다.)

var firstLine = inputs[0].split(" ")
var secondLine = inputs[1].split(" ").map(item => parseInt(item))

var res = 0

var i = 0
for( i = 0; i < parseInt(firstLine[0]-2); i++)
{
    for (var j =i+1; j< parseInt(firstLine[0]-1); j++) 
    {
        for (var k = j+1; k<parseInt(firstLine[0]); k++)
        {
            m = secondLine[i]+secondLine[j]+secondLine[k]
            
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


