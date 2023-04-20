// function solution(n) {
//     let arr = new Array(n+1).fill(true).fill(false,0,2)
//     console.log(arr)
//     for(let i = 2; i*i <= n; i++){
//         if(arr[i])
//         for(let j = i * i; j<=n; j=j+i){
//             console.log(j)
//             arr[j] = false
//         }
            
//     }
//     return arr;
// }


// function solution(n){
//     let arr = new Array(n+1).fill(true).fill(false,0,2)
//     console.log(arr)
//     for(let i = 2; i*i <= n; i++){
//         if(arr[i]){
//             for(let j = i * i; j <=n; j +=i){
//                 arr[j] = false;
//             }
//         }
//     }
//     return arr.filter(v => v===true).length;
// }

// function solution(n){
//     let arr = new Array(n+1).fill(true).fill(false,0,2)
    
//     for(let i = 2; i * i <= n; i++){
//         if(arr[i] === true){
//             for(let j = i * i; j <= n; j = j+i){
//                 arr[j] = false
//             }
//         }
//     }
//     arr = arr.filter(v => v === true)
//     return arr.length
// }

// function solution(n){
//     let arr = Array(n + 1).fill(true).fill(false, 0, 2)
//     console.log(arr)
    
//     for(let i = 2; i * i <= n; i++){
//         for(let j = i * i ; j<= n; j = j+i)
//             if(arr[j]){
//                 arr[j] = false
//             }
//     }
//     return arr.filter(v => v === true).length
    
    
// }


function solution(n){
    //1부터 n까지 소수를 구해래ㅏ
    let arr = new Array(n+1).fill(true).fill(false,0,2)
    
    for(let i = 2; i * i <= n; i++){
        
        for(let j = i * i ; j <=n; j = j + i){
            if(arr[i]) {
            arr[j] = false
        }
        }
    }
    //true인게 소수인거고 false는 소수가 아닌거임
    return arr.filter((v) => v === true).length
}