function solution(phone_number) {
    let answer = phone_number.slice(0,phone_number.length-4)
    
    let lastNum = phone_number.slice(phone_number.length-4, phone_number.length)
    
    let val = ''
    for(let i = 0; i<answer.length; i++){
        val += '*'
    }
    return val + lastNum;
}