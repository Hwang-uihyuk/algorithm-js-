function solution(food) {
    var answer = []
    
    for(let i = 1; i<food.length; i++){
        for(let j = 0; j<parseInt(food[i]/2); j++){
            answer.push(i)
        }
        
    }
    
    console.log([...answer])
    
    return [...answer,0, ...answer.reverse()].join('')
}