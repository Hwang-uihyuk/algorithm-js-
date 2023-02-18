function solution(nums) {
    const getPoket = nums.length/2
    //이거는 입출력 1일떄 2가 나온다.
    const uniquenums = [...new Set(nums)]
    
    
    
    console.log([...new Set(nums)])
    return getPoket <= uniquenums.length ? getPoket : uniquenums.length
}