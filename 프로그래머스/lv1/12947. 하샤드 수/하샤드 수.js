function solution(x) {
    var answer = true;
 let val = String(x).split('').map(a=>+a).reduce((a,b)=> a+parseInt(b))
    if(Number(x) % val === 0){
        return answer;
    }
        
    else
        return false
}