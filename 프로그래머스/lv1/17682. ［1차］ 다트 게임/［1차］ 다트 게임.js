function solution(dartResult) {
    let arr = []
    
    for(let i = 0; i<dartResult.length; i++){
        if(dartResult[i] === '1' && dartResult[i+1] === '0'){
            arr.push(10)
            i++;
            continue;
        }
        else if(dartResult[i] === "S")
            arr[arr.length-1] = Math.pow(Number(arr[arr.length-1]),1)
        else if(dartResult[i] === "D")
            arr[arr.length-1] = Math.pow(Number(arr[arr.length-1]),2)
        else if(dartResult[i] === "T")
            arr[arr.length-1] = Math.pow(Number(arr[arr.length-1]),3)
            
        else if(dartResult[i] === '*'){
            arr[arr.length-1] = Number(arr[arr.length-1]) * 2 
            arr[arr.length-2] = Number(arr[arr.length-2]) * 2
        }
        
        else if(dartResult[i] === '#'){
            arr[arr.length-1] = Number(arr[arr.length-1]) * (-1)
        }
            
        else {
            arr.push(Number(dartResult[i]))
        }
            console.log(arr)
        
    }
    return arr.reduce( (acc,curr) => acc+curr) ;
}