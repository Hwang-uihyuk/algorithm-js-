function solution(n)
{
    n = String(n).split('').map(v=>+v).reduce((acc,curr) => acc +curr)

    return n;
}