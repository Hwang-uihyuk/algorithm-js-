function solution(n, m) {
    let gcdval = gcd(n,m)
    let lcdval = n/gcdval * m/gcdval * gcdval
    return [gcdval, lcdval]
}

function gcd(a,b){
    if(a%b===0) return b
    else return gcd(b, a%b)
}