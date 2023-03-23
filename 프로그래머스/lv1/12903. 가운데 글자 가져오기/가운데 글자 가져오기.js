function solution(s) {
    if(s.length % 2 !== 0)
        return s[parseInt(s.length/2)]
    else if(s.length % 2 === 0){
        console.log(s[s.length/2])
        return s[ (s.length/2)-1]+s[parseInt(s.length/2)]
    }
        
    return answer;
}