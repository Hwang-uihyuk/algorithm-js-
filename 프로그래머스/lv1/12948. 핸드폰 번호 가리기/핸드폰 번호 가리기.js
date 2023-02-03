function solution(phone_number) {
    let num = phone_number
    num = num.substring(num.length-4,num.length )
    let a= "*".repeat(num.length-4) + num
    return "*".repeat(phone_number.length-4) + num
}