function solution(arr, divisor) {
    var answer = [];
    arr = arr.filter(val => val% divisor===0)
    
    return arr.length > 0 ? arr.sort( (a,b) => a-b) : [-1];
}