function solution(number, limit, power) {
    var answer = 0;
    
    //1번부터 number까지 번호가 지정되어 있다.
    //기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 한다.
    // ex) 4이면 1,2,4 [3개] 6이면 1,2,3,6 [4개]
    
    //만약에 제한수치가3이고 초과한 기사가 사용할 무기는 2이다.
    let arr = []
    
    //약수의 갯수를 정하자.
    for(let i = 1; i<=number; i++){
        let cnt = 0
        for(let j = 1; j<=Math.sqrt(i); j++)    {
            if(i % j === 0 && i/j !== j){
                cnt = cnt + 2
            }
            else if(i%j ===0 && i/j === j){
                cnt = cnt + 1
            }
        }
        arr.push(cnt)
    }
    let originarrlength = arr.length;
    
    arr = arr.filter((val) => val <= limit)
    let filterarrlength = arr.length;
    answer = arr.reduce((arr,curr) => arr + curr) + (originarrlength - filterarrlength)*power
    
    return answer;
}