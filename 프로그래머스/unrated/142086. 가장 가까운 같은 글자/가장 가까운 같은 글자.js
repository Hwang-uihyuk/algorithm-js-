function solution(s) {
    let answer = []
    let stack = []
    for(let i=0; i<s.length; i++){
        if(stack.includes(s[i]) === false){
            stack.push(s[i])
            answer.push(-1)      
            
        }
        else if(stack.includes(s[i]) === true){
            let res = s.indexOf(s[i],i) - s.slice(0,i).lastIndexOf(s[i])
            answer.push(res)
            }
        
    }
    
    return answer;
}