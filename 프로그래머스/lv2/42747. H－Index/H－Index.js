function solution(citations) {
    let cnt = 0;
    c = citations.sort((a,b) =>a-b)
    
    
    let max = 0;
    
    //0부터 3까지구한다.
    //c === [0,1,2]
    for(let i = 0; i<=Math.max.apply(null,c); i++){
        let cnt = 0;
        
        //이 for문은 c를 순회한다.
        for(let j = 0 ; j<c.length; j++){ 
            if(c[j] >= i) cnt++
        }
        let fil = c.filter((v) => i>=v)
        if(cnt >= i && i >= fil.length)
            max = i
    }
    return max ;
}