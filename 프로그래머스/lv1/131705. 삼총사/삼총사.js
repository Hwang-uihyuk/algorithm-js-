function solution(number) {
    let cnt = 0 
    
    for(let i = 0; i<number.length-2; i++){
        for(let j = i+1; j<number.length-1; j++){
            for(let k = j+1; k<number.length; k++){
                console.log("i", i)
                console.log("j",j)
                console.log('k',k)
                if(number[i]+ number[j]+ number[k] === 0){
                    
                    cnt ++
                }
                    
            }
        }
    }
    return cnt;
}