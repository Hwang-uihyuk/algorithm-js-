function solution(A, B) {
    var answer = 0;
    let len = A.length
    let i = 0
    A = A.split('')
    if(A.join('') === B) return 0
    while(i<len){
        A.unshift(A.pop())
        i ++ 
        if(A.join('') === B) return i
        
    }
    return -1;
}