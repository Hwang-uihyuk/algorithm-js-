function solution(arr) {
    arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length; i++){
       let 최대공약수 = gcd(arr[0],arr[1])
       console.log('idx',i)
       console.log('최대공약수',최대공약수)
       let a = arr[0] / 최대공약수
       let b = arr[1] / 최대공약수
       var res = 최대공약수 * a * b
       console.log("최소공배수",res)
       arr.splice(0,2)
       arr.unshift(res)
        console.log(arr)
       if(arr.length === 1) break;
        i -= 1
    }
    return res;
}


//유클리드 호제법
function gcd(a,b){
    const remain = a % b
    if( remain ===0) return b
    else return gcd(b, remain)
}