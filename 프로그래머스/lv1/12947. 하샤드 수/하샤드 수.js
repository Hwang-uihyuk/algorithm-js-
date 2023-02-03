function solution(x) {
    let res = String(x).split('').map(v=> +v).reduce((a,c)=> a+c)
    
    return (x%res===0) ? true : false;
}