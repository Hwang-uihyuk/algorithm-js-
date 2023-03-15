function solution(numbers) {
    let arr = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            let val = numbers[i] + numbers[j]
            arr.push(val)
        }
    }
    let mySet = new Set(arr);
    const uniqueArr = [...mySet];
    return uniqueArr.sort((a,b) => a-b);
}