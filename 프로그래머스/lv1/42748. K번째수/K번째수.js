function solution(array, commands) {
    
    let arr=[]
    //commands 대로 for문을 돌려주고
    // 
    let res = []
    for(let i=0; i<commands.length; i++){
       arr = array.slice(commands[i][0]-1, commands[i][1] )
        arr.sort((a,b)=> a-b)
            res.push(arr[commands[i][2]-1])
        console.log(i,arr)
        console.log(res)
    }
    
    return res;
}