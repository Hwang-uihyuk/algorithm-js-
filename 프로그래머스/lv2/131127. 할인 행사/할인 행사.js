function solution(want, number, discount) {
    let cnt = 0
    let setnumber = number.slice()
    for(let i = 0; i<discount.length; i++){
        let setnumber = number.slice()
        for(let j = i; j<i+10; j++){
            if(want.includes(discount[j]))
                setnumber[want.indexOf(discount[j])] -= 1
        }
        if(setnumber.filter(v => v>0).length === 0) cnt++
    }
    return cnt;
}