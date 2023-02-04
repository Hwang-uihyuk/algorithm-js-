function solution(n, m) {
    let 최대공약수 = 1
    let 최소공배수 = 1
    
    for(let i = 2 ; i<=n; i++){
    while(n % i === 0 && m % i === 0){
        최대공약수 *= i
        n = n/i
        m = m/i
    }    
    }
    
    
    return [최대공약수, 최대공약수 *n*m];
}