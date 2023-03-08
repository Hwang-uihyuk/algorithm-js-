function solution(s) {
    let cnt = 0
    let cnt2 = 0
    while(s !== "1"){
    for(let x of s)
        if(x === "0") cnt++ 
        
    s = s.replaceAll('0', "")
    s = (s.length).toString(2)
        cnt2 ++
    }
    return [cnt2,cnt];
}