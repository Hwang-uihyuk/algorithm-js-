function solution(n) {
    var answer = [];
    answer =  String(n).split('').reverse().map(v => +v)
    return answer;
}