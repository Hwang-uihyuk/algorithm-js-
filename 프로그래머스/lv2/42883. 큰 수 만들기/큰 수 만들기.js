function solution(number, k) {
    const arr = [];
    //number "1231234"
    for(let i = 0; i < number.length; i++){
        //배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
        while(arr.length > 0 && arr[arr.length-1] < number[i] && k > 0){
            k--;                //마지막 숫자        와    현재 숫자   k > 0
            arr.pop();          // 위 조건을 만족하면, pop을 해준다.
            
        }
        arr.push(number[i]);
    }
    
    arr.splice(number.length - k, k);
    return arr.join("")
}