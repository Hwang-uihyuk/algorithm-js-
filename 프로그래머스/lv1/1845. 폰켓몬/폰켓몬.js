function solution(nums) {
    const getPoket = nums.length/2
    const uniquenums = [...new Set(nums)]
    return getPoket <= uniquenums.length ? getPoket : uniquenums.length
}