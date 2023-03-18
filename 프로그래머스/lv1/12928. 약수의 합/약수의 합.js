function solution(n) {
    let answer=0
    for(let i = 1; i<=Math.sqrt(n); i++){
        if(n%i === 0 && i !== n/i){
            answer = answer + i + n/i
        }
        else if(n%i === 0 && i === n/i) answer += i
        
    }
    return answer;
}