// function solution(s){
//     let cnt = 0
//     for(let x of s){
//         if(x === '(') cnt ++
//         else cnt --
        
//         if(cnt <0) return false
//     }

//     return cnt ===0 ? true : false;
// }


function solution(s){
    let cnt = 0;
    let answer;
    for(let i =0; i<s.length; i++){
        if(s[i] === '(') cnt ++
        else cnt --
        if (cnt < 0)
            return false
    }
    
    if (cnt > 0)
        return false
    else return true
}