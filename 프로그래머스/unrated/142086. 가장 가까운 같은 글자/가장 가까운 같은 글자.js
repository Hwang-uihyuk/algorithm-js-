function solution(s) {
    var answer = [];
    let res = []
    for(let i=0; i<s.length; i++){
        if(!answer.includes(s[i])){
            answer.push(s[i])
            res.push(-1)
        } 
        else{
          res.push(i - answer.lastIndexOf(s[i]))
          answer.push(s[i])
        } 
    }
    return res;
}