function solution(array, commands) {
    let arr = []
    for(let i = 0; i<commands.length; i++){
        let res = array.slice(commands[i][0]-1,commands[i][1])    
        res.sort((a,b) => a-b)
        arr.push(res[commands[i][2]-1])
        }
        
    
    return arr;
}