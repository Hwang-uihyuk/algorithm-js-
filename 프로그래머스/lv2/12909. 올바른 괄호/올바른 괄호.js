function solution(s){
    let cnt = 0
    for(let x of s){
        if(x === '(') cnt ++
        else cnt --
        
        if(cnt <0) return false
    }

    return cnt ===0 ? true : false;
}