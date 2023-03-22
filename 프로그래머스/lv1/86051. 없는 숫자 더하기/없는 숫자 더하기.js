function solution(numbers) {
    let answer = 45
    
    return answer - numbers.reduce((acc,curr) => acc + curr);
}