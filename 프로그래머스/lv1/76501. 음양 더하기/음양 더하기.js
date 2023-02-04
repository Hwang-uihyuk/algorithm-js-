function solution(absolutes, signs) {
    let answer = 
        absolutes.reduce((acc, curr, i) => acc + (curr * (signs[i]===true ? 1 : -1)) ,0)
    return answer;
}