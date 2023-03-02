function solution(array) {
    array = array.join('').split('').filter(v => v === '7')
    return array.length;
}