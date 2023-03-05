function solution(board) {
    const n = board.length;
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    
    //깊은복사
    const danger = JSON.parse(JSON.stringify(board));
    
    for(let x = 0; x < n; x ++){
        for(let y = 0; y<n; y++){
            if(!board[x][y]) continue; //이거 왜 하지 ?
            
               for(let i = 0; i < 8; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= n)
                    continue;
                
                danger[nx][ny] = 1;
            }
        }
    }
    const mineCnt = danger.flat().filter(d => d).length;
    return n * n - mineCnt;
}