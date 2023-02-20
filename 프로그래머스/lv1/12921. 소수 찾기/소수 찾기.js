function solution(n) {
    let res = 0;   
    for(let i =2; i<=n; i++){
        let cnt = 0;
        
        
        //n까지 숫자를 돌려야됨 ㅇㅇ
        //소수는 자기자신을 포함해서 약수가 두개여야함 
        for(let j=2; j<=Math.floor(Math.sqrt(i)); j++){
            if(i % j === 0){ cnt++ 
                            break}
        }
        if(cnt === 0) res++
    }
    return res;
}