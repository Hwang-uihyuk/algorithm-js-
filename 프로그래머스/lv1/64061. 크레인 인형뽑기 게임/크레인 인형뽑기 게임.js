function solution(board, moves) {
    var answer = 0;
    // board [[0,0,0,0,0],
    //        [0,0,1,0,3],
    //        [0,2,5,0,1],
    //        [4,2,4,4,2],
    //        [3,5,1,3,1]]
    
    // moves [1,5,3,5,1,2,1,4]	
    let stack = []
    let cnt = 0 
    for(let i = 0 ; i<moves.length; i++){
        for(let j = 0; j<board.length; j++){
            if( board[j][moves[i]  - 1] !== 0){
                let val = board[j][moves[i] - 1] 
                stack.push(val)
                board[j][moves[i] -1 ] = 0
                break;
            } 
        }
        
         if(stack.length > 1 && stack[stack.length-1] - stack[stack.length-2] ===0  )    {
             stack.splice(stack.length-2,2)
             cnt++;
             
         }
    }
    return cnt*2
}