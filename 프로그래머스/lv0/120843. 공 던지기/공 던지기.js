function solution(numbers, k) {
    let i = 0
    let curridx = 0
    while(true){
        curridx =curridx % numbers.length 
        i++
        if(i === k) break;
        curridx += 2

    }
    
    
    return numbers[curridx];
}