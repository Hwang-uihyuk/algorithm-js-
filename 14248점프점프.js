const input = require("fs").readFileSync('./input.txt').toString().split('\n')

const bridge = Array.from({length: parseInt(input[0])}, (_, i) => i+1)
console.log(bridge)
const start = parseInt(input[2])
// 몇칸 갈 수 있냐에 대한 것
const visited = []

const jumps = input[1].split(' ').map(v => parseInt(v))
//점프 1 4 2 2 1 

const bfs = (pos) => {
    if(pos <= -1 || pos > bridge.length - 1 || visited.includes(pos)) {
        //안될 때의 조건을 걸어준다. 
        // 현재위치가 -1이 될때, 현재위치가 클때, 방문했던것일때 그만둔다.
       return;
    }
    visited.push(pos)
    //방문하면 배열에 넣어준다.
    bfs(pos - jumps[pos])
    //왼쪽으로 가면서  
    bfs(pos + jumps[pos])
    //오른쪽 가면서 배열에 넣어준다.
}

bfs(start - 1)

console.log(visited.length)