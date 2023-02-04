function solution(left, right) {
    let answer= 0
    for(let i = left; i<=right; i++){
        let cnt = 0
        for(let j = 1; j<=Math.sqrt(i); j++){
            if( j === i/j) cnt ++
            else if(i % j === 0) cnt += 2
        }
        if(cnt % 2=== 0)  answer += i
        else answer -= i
    }
    return answer;
}