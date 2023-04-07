// function solution(N, stages) {
    
//     // N는 전체 스테이지고
//     // stages는 현재 스테이지에 있는 사람들 
//     // N+1은 다 꺤애
//     // 실패율은 => 스테이지에 있으나 도달못한애 / 스테이지에 도달한 플레이어 수 
//     let falseRate = []
//     let res = []
    
    
//     for(let i = 1; i<=N; i++){
//         res.push(i)
//         let 스테이지도달못한애 = 0
//         let 도달한애들 = 0
//         for(let j=0; j<stages.length; j++){
//             if(stages[j] === i)  스테이지도달못한애++ 
//             if(stages[j] >= i)  도달한애들++
//         }
//         if(도달한애들 === 0) falseRate.push(0)
//         else {falseRate.push(스테이지도달못한애 / 도달한애들)}
    
//     }
//         // console.log(falseRate)
//         // console.log(res)
        
//     //원래 배열을 남겨둬야해
//     let 원래배열 = falseRate.slice()
    
//     let arr = []
//     falseRate.sort((a,b) => b-a)
    
    
//     for(let i =0; i<falseRate.length; i++){
        
//             let val = 원래배열.indexOf(falseRate[i])
//              arr.push(val+1)
//             // let reg = new RegExp(`${falseRate[i]}`)=            
//           원래배열.splice(원래배열.indexOf(falseRate[i]),1,"지움")
        
//     }
 
    
//     return arr;
// }

// function solution(N, stages){
    
//     let falseRate = []
   
//     for(let i = 1; i<=N; i++){
//          let 스테이지도달플레이어 = 0
//          let 도달but클리어no = 0
//         for(let j = 0; j <stages.length; j++){
//             if(stages[j] >= i){
//                 스테이지도달플레이어++;
//             }
//             if(stages[j] === i){
//                 도달but클리어no++;
//             }
//         }
//         if(스테이지도달플레이어 === 0) falseRate.push(0)
//         else{
//         falseRate.push(도달but클리어no/스테이지도달플레이어)
//         }
//     }
    
//     let bonArr = falseRate.slice()
//     let res = []
//     falseRate.sort((a,b) => b-a)
//     for(let i = 0; i <falseRate.length; i++){
//         res.push(bonArr.indexOf(falseRate[i]) + 1)
//         bonArr.splice(bonArr.indexOf(falseRate[i]),1,"지움")
       
//     }
//     console.log(1/0)
//     return res
// }

function solution(N,stages){
    let arr = []
    let res = []
    for(let i = 1; i <=N; i++){
        
        let 스테이지도달 = 0
        let 클리어못한수 = 0
        let falseRate = 0
        for(let j = 0; j<stages.length; j++)
            {
                if(stages[j]>= i) 스테이지도달++
                if(stages[j] === i) 클리어못한수++
            }
        
        if(스테이지도달 === 0) arr.push(0)
        else{
            falseRate = 클리어못한수/스테이지도달
            arr.push(falseRate)
        }
    }
    let 원래배열 = arr.slice() // 
    arr.sort( (a,b) => b-a)
    
    for(let i = 0 ; i<원래배열.length; i++){
        res.push(원래배열.indexOf(arr[i]) + 1)
        원래배열.splice(원래배열.indexOf(arr[i]),1,'지움') 
    }
    
    
    return res
}