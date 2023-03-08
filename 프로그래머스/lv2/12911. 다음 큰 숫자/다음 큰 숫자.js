function solution(n) {
    var answer = 0;
    let n_one_num = n.toString(2).split('').filter(v=> v=== '1').length;
    for(let i = n+1; i<=1000000; i++){
        if(n_one_num === i.toString(2).split('').filter(v =>v==='1').length){
            answer = i
            break;
        }
            
        
    }
    return answer
}