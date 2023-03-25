function solution(numbers) {
    //일단 문자열은 '+'은 '123' + '3' === '1233'
    //           '-'은 '123' - '3' === '120'
    
    numbers= numbers.map(v => v+"").sort((a,b) => (b+a)- (a+b)).join('')
    
    if(numbers[0] === '0') return "0"
    return numbers;
}