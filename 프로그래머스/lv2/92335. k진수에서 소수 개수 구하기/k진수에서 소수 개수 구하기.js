function solution(n, k) {
    //양의 정수 n
    //k 진수로 변경
    // 437674 3진수로 변경햐면
    // 211020101011 입니다.
    let arr = n.toString(k).split('0').filter(v=> v!=='' && v!=='1')
    
    
    //소수구하기
    let cnt = 0
    let breakcnt = 0
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
        for(let j = 2; j<=Math.sqrt(arr[i]); j++){
            if( arr[i] % j === 0) {
                breakcnt++
                break;
            }
        }
        if(breakcnt === 0) cnt++   
    }
    return cnt
}