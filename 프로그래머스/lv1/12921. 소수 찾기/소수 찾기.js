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

function solution(n){
    let arr = new Array(n+1).fill(true).fill(false,0,2)
    
    for(let i = 2; i * i <= n; i++){
        if(arr[i] === true){
            for(let j = i * i; j <= n; j = j+i){
                arr[j] = false
            }
        }
    }
    arr = arr.filter(v => v === true)
    return arr.length
}