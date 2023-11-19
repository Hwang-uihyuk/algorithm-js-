function solution(maps) {
    // 최단 거리 문제는 bfs
    const yLen = maps.length; // 5 세로 길이
    const xLen = maps[0].length; // 5 가로 길이
    const goalY = yLen - 1; // 4 도착 지점의 좌표
    const goalX = xLen - 1; // 4 도착 지점의 좌표
    const dy = [0,0,1,-1]; // 상하 좌우 이동 좌표
    const dx = [-1, 1,0,0]; // 상하 좌우 이동 좌표
    
    const queue = []   // 처음 시작은 가장 좌측의 가장 상단에서 시작하므로 0,0 좌표 + 이동한 칸 수 1 => [0,0,1] 
    // 0,0은 좌표, 1은 움직인 거리
    
    queue.push([0,0,1]); 
    // queue = [[0,0,1]]  // 이 상태임.
    
    
    
    while(queue.length) {
        const [curY, curX, move] = queue.shift(); // 현재 좌표를 꺼낸다.
        if ( curY === goalY && curX === goalX) return move;
        
        for(let i = 0; i<4; i++){ //dx, dy 움직이는 거 
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if (ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1){ 
             // 0보다는 커야하고, 5보다는 작아야하고, 가야할 거리고 map의 길이가 1이여야함.
                queue.push([ny,nx, move + 1]);
                maps[ny][nx] = 0;
             // 지나간 거리는 0으로 처리해줘서 나중에 위로 못올라가게해준다. ㅇㅇ
            }
        }
    }
        
    
    return -1;
}

// function solution(maps){
//     const dx = [-1,1,0,0]; // 왼쪽, 오른쪽 
//     const dy = [0,0,-1,1]; // 위쪽, 아래쪽
    
//     // 현재 좌표
    
//     let pointX = 0; //현재 x좌표
//     let pointY = 0; //현재 y좌표
//     let movingcnt = 1; // 움직인 거리
    
//     for(let i =0; i<maps.length; i++){
//         console.log(movingcnt)
//         if(pointX === 4 && pointY === 4){
//             return movingcnt;
//         }
        
//         for(let j = 0; j<dx.length; j++){
//             const nx = pointX + dx[j];
//             const ny = pointY + dy[j];
//             if( nx >= 0 && nx < maps.length && ny >=0 && ny <maps.length && maps[ny][nx] === 1){
//                 console.log(maps[nx,ny])
//                 console.log(nx, ny)
//                 pointX= nx;
//                 pointY= ny;
//                 movingcnt++;
//                 maps[nx][ny] = 0;
                
//             }
//         }
//     }
// }