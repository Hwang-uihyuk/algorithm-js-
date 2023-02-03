function solution(n) {
    n = String(n)
    n = n.split('').sort((a,b) => b-a).join("")
    return parseInt(n);
}