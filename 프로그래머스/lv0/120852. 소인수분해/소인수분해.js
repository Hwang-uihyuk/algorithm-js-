function solution(n) {
    let arr = []
    for(let i = 2 ; i<=n; i++){
        while( n % i === 0){
            arr.push(i)
            n = n/i
        }
    }
    const set = new Set(arr)
    console.log(...set)
    const unique = [...set]
    
    return unique;
}