function solution(k, m, score) {
    let count = Math.floor(score.length / m);
    
    score.sort((a,b) => b-a) //내림차순했다
    console.log(score)
    let c = 0
    let answer = 0
    for(let i =0 ; i<count; i++){
        let arr = score.slice(c, c+m)
        answer += Math.min(...arr) * m
        c = c + m
        
    }
    return answer;
}