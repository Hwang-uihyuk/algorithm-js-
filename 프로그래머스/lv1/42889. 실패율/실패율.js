function solution(N, stages) {
    
    // N는 전체 스테이지고
    // stages는 현재 스테이지에 있는 사람들 
    // N+1은 다 꺤애
    // 실패율은 => 스테이지에 있으나 도달못한애 / 스테이지에 도달한 플레이어 수 
    let falseRate = []
    let res = []
    
    
    for(let i = 1; i<=N; i++){
        res.push(i)
        let 스테이지도달못한애 = 0
        let 도달한애들 = 0
        for(let j=0; j<stages.length; j++){
            if(stages[j] === i)  스테이지도달못한애++ 
            if(stages[j] >= i)  도달한애들++
        }
        if(도달한애들 === 0) falseRate.push(0)
        else {falseRate.push(스테이지도달못한애 / 도달한애들)}
    
    }
        // console.log(falseRate)
        // console.log(res)
        
    //원래 배열을 남겨둬야해
    let 원래배열 = falseRate.slice()
    
    let arr = []
    falseRate.sort((a,b) => b-a)
    
    
    for(let i =0; i<falseRate.length; i++){
        
            let val = 원래배열.indexOf(falseRate[i])
             arr.push(val+1)
            // let reg = new RegExp(`${falseRate[i]}`)=            
          원래배열.splice(원래배열.indexOf(falseRate[i]),1,"지움")
        
    }
 
    
    return arr;
}