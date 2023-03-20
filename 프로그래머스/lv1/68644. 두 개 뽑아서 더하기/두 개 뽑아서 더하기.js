function solution(numbers) {
    let arr = []
    for(let i = 0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            arr.push(numbers[i] + numbers[j])
        }
    }
    console.log(arr)
    let set = new Set(arr)
    console.log(set)
    let uniqueArr = [...set]
    return uniqueArr.sort((a,b) => a-b );
}