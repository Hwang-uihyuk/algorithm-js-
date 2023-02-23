function solution(nums) {
    let arr = []
    let answer = 0
    for(let i = 0; i<nums.length-2; i++){
        for(let j = i+1; j<nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                let val = nums[i] + nums[j] + nums[k]
                arr.push(val)                
                    
            }
        }
    }
    // let set = new Set(arr)
    // let uniqArr = [...set]
    // console.log(uniqArr)
    //여기까지는 일단 데이터를 모음.
    
    for(let i = 0; i<arr.length; i++){
        cnt = 0
        for(let j = 2; j<=Math.sqrt(arr[i]); j++){
            if(arr[i] % j === 0) {
                cnt++ 
                break}
        }    
        if(cnt === 0) answer ++
    }
    
    return answer;
}