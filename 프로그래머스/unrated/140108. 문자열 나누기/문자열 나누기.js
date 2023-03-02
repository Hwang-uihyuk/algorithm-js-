function solution(s) {
    let arr1 = []
    let arr2 = []
    let cnt = 0
    for(let i = 0; i<s.length; i++){
        if(arr1.length === 0) arr1.push(s[i])
        else if(arr1[0] === s[i]) arr1.push(s[i])
        else arr2.push(s[i])      
        
        if(arr1.length === arr2.length){
            arr1 = []
            arr2 = []
            cnt ++
        }
        
        
    }
    if(arr1.length >0 || arr2.length >0) cnt++
    return cnt;
}