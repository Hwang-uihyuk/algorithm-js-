function solution(food) {
    let arr=[0]
    
    for(let i = food.length-1; i>=1; i--){
        for(let j = 0; j< parseInt(food[i]/2); j++){
            arr.push(i)
            arr.unshift(i)
        }
        
        // for(let k = 0; k<parseInt(food[i]/2); k++){
        //     arr.unshift(i)
        // }
    }
    let res = arr.join('')
    return res;
}