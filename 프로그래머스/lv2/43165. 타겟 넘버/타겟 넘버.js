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

// function solution(numbers, target){
//     //numbers = [1,1,1,1,1] 
//     //target = 3
//     // 숫자 3을 만들려면 몇가지 방법이 있을까에 대한 
//     let cnt = 0
    
//     const dfs = (sum,depth) => {
        
//         if(depth === numbers.length){
//             if(sum === target) cnt ++
//             return
//         }
//         dfs(sum + numbers[depth], depth + 1)
//         dfs(sum - numbers[depth], depth +1)
        
        
//     }
//     dfs(0,0)
    
//     return cnt;
// }

// function solution(numbers,target){
//     let cnt = 0
    
//     const dfs = (sum, depth) => {
//         if(depth === numbers.length){
//             if(target === sum) cnt++
//             return
//         }
//         dfs(sum + numbers[depth], depth + 1)
//         dfs(sum - numbers[depth], depth + 1)
//     }
//     dfs(0,0)
//     return cnt
// }


// function solution(numbers, target){
//     let cnt = 0;
//     function DFS(L, sum){
//         if(L === numbers.length){
//             if(target === sum) cnt++
//             return
                               
//         }
//         else{
//             DFS(L+1, sum + numbers[L])
//             DFS(L+1, sum - numbers[L])
//         }
//     }
    
//     DFS(0,0)
//     return cnt;
// }

// function solution(numbers, target){
//             var cnt = 0;

//     function DFS(L, sum){
//         if(L === numbers.length){
//             if(sum === target){
//                 cnt++
//             return
//          }
        
//         }
         
//         else{
//             DFS(L+1, sum + numbers[L])
//             DFS(L+1, sum - numbers[L])
//         }
//     }
//     DFS(0,0)
   
//     return cnt
// }

function solution(numbers, target){
    let answer = 0
    function DFS(L, sum){
        if(L === numbers.length){
            if(target === sum){
                answer ++; 
                return
            }                
        }
        else{
            DFS(L+1, sum + numbers[L])
            DFS(L+1, sum - numbers[L])
        }                
    }
    DFS(0,0)
    
    return answer
}


