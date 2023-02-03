function solution(n)
{
    let answer = n.toString().split('').map(a => +a).reduce((a,c)=>a+c)
    

    return answer;
}