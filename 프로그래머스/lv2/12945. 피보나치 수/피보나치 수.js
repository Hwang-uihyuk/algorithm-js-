function solution(n) {
    let arr = new Array(n+1).fill(0)
    arr[0] = 0
    arr[1] = 1
    
    for(let i = 2; i<arr.length; i++){
        arr[i] = ((arr[i-1]) + (arr[i-2])) %1234567
    }
   let res = BigInt(arr[n])
    return res;
}