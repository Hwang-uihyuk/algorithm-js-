// function solution(X, Y) {
//     const answer = []
//     const numberX = new Array(10).fill(0)
//     const numberY = new Array(10).fill(0)
    
//     console.log('X', X.split(''))
//     //숫자별 보유 개수파악
//     X.split('').forEach(n => numberX[n] ++)
//     Y.split('').forEach(n => numberY[n] ++)

//     for(let i = 0; i<10; i++){
//         const m = Math.min(numberX[i], numberY[i])
//         for(let j = 0; j < m; j++){
//             answer.push(i)
           
//             console.log('j',j)
//             console.log(answer)
//         }
//     }
// return answer
// }

//1회독
function solution(X,Y){
    // 0부터 10까지 숫자가 나올 수 있으니까.
    let numberX = new Array(10).fill(0)
    let numberY = new Array(10).fill(0)
    
    X.split('').forEach(v => numberX[v]++)
    Y.split('').forEach(v => numberY[v]++)
    console.log('x',numberX)
    
    let arr = []
    
    for(let i = 0; i<numberX.length; i++){
        const m = Math.min(numberX[i], numberY[i])
        for(let j = 0; j<m; j++){
            arr.push(i+"")
        }
        
    }
    arr.sort((a,b)=> b-a)
    arr = arr.map(v=> v+"").join('')
    
    if(arr.length === 0) return "-1"
    else if(arr[0] === "0") return "0"
    else return arr
    
    
}