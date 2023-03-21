function solution(a, b, n) {
    var answer = 0;
    
    // a개를 가져다주면 b개를 준다. 
    // n은 원래있던 콜라의 갯수다.
    
    while(n >= a){
        answer += parseInt(n/a) * b
        n = parseInt(n/a) * b + n%a
    }
    return answer;
}