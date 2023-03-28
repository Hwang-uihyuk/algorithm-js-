function solution(numbers, target) {
    let cnt = 0;
    
    const dfs = (sum, depth) => {
        
        if(depth === numbers.length){
            if(sum === target) cnt ++;
            return;
        }
        dfs(sum + numbers[depth], depth + 1)
        dfs(sum - numbers[depth], depth + 1)
    }
    
    dfs(0,0);
    
    return cnt;
}