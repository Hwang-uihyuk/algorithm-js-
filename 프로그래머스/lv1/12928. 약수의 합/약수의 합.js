function solution(n) {
    let res = []
    if( n === 0)
        return 0
    
    for(let i = 1; i<=Math.sqrt(n); i++){
        
        if( n % i === 0){
            res.push(i)
        if( n/i !== i)
            res.push(n/i)
        }
    }
    let ans = res.reduce((a,c)=> a+c)
    return ans;
}