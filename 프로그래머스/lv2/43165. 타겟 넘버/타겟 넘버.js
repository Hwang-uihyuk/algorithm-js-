// function solution(numbers, target) {
//     let cnt = 0;
    
//     const dfs = (sum, depth) => {
        
//         if(depth === numbers.length){
//             if(sum === target) cnt ++;
//             return;
//         }
//         dfs(sum + numbers[depth], depth + 1)
//         dfs(sum - numbers[depth], depth + 1)
//     }
    
//     dfs(0,0);
    
//     return cnt;
// }

function solution(numbers, target){
    //numbers = [1,1,1,1,1] 
    //target = 3
    // 숫자 3을 만들려면 몇가지 방법이 있을까에 대한 
    let cnt = 0
    
    const dfs = (sum,depth) => {
        
        if(depth === numbers.length){
            if(sum === target) cnt ++
            return
        }
        dfs(sum + numbers[depth], depth + 1)
        dfs(sum - numbers[depth], depth +1)
        
        
    }
    dfs(0,0)
    
    return cnt;
}