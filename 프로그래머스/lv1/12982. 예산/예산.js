function solution(d, budget) {
    d.sort((a,b) => a-b) 
    let cnt = 0
    for(let i = 0; i<d.length; i++){
        if(budget - d[i] >= 0){
            budget = budget-d[i]
            cnt++
        }
        else return cnt
            
    }
    return cnt;
}