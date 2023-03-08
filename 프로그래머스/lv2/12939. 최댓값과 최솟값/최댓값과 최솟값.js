function solution(s) {
    s= s.split(' ')
    let maxVal = Math.max(...s)
    let minVal = Math.min(...s)
    
    return `${minVal} ${maxVal}`;
}