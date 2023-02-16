function solution(numbers) {
    var answer = [];
    let n = numbers.length
    for(let i = 0; i<n; i++){
        for(let j = i+1; j<n; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    let set = new Set(answer)
    console.log(set)
    let uniqueArr = [...set]
    console.log(uniqueArr)
    
    return uniqueArr.sort((a,b)=> a-b);
}