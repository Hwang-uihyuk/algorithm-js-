const fs = require('fs')
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString()

const dp = new Array(Number(input) + 1).fill(0);

// dp.length는 현재 11이다.
// 0은 포함 안 시키기 때문에
for (let i = 2; i < dp.length; i++){
    dp[i] = dp[i-1] + 1
    //왜 굳이 dp[2] = dp[1] + 1을 해주느냐 ?
    // dp[3] = d[2] + 1 이 된다.

    // 3의 배수일 때 0이 되는데
    if(i % 3 === 0){
        dp[i] = Math.min(dp[i],dp[i/3] + 1)
    }

    if (i % 2 ===0){
        dp[i] = Math.min(dp[i], dp[i/2] + 1)
    }
}

console.log(dp[count])



// Bottom-up 방식으로 접근해본다.

 

// dp 배열을 만든다. dp[n]에는 숫자 n이 1이 되기 위해 연산한 최소 횟수가 저장될 것이다.

// dp[1] = 0 이다. (1은 아무짓도 안해도 1이 되기 때문에)

// dp[2]는 2가 되기 전에 1에다 +1을 해야 나올 수 있는 수 이기 때문에 dp[1] + 1 = 1이 된다. (+1이라는 것은 연산횟수가 한 번 더해지기 때문에 더한 것이다.)

// dp[3]은 3이 되기 전에 이 수가 2였을 수도 있고 1이였을 수도 있다. 즉, 2에다 1을 더해도 3이 되고, 1에다 3을 곱해도 3이 된다. 즉  dp[3] = (dp[2] + 1 , dp[1] + 1) 중 최솟값이 된다.

// 그럼 dp[4]부터는 어떻게 구할 수 있을까?

// dp[4]는 2로 나누어 떨어지는 수이다. 즉 이 수는 3에다 1을 더하거나, 2에다 2를 곱해서 4가 되었을 것이다. 즉 dp[4] = (dp[4 - 1] + 1, dp[4 / 2] + 1) 중의 최솟값이 된다.

 

// 이렇게 나아가다보면 점화식을 세울 수 있다.

// - dp[n]이 2와 3으로 모두 나누어떨어지지 않는 수라면 dp[n] = dp[n-1] + 1이 된다.

// (예를 들어 5의 경우, 2와 3으로 모두 나누어떨어질 수 없기 때문에 직전의 수가 4이고 거기에 + 1을 해서 5가 될 수 밖에 없기 때문에 dp[4] + 1을 더한게 dp[5]가 된다.)

// - dp[n]이 2로 나누어떨어진다면 dp[n] = (dp[n-1] + 1, dp[n / 2] + 1) 중 최솟값이 된다.

// - dp[n]이 3으로 나누어떨어진다면 dp[n] = (dp[n-1] + 1, dp[n / 3] + 1) 중 최솟값이 된다.

// - dp[n]이 2와 3으로 둘다 나누어떨어진다면 dp[n] = (dp[n-1] + 1, dp[n / 2] + 1, dp[n / 3] + 1) 중 최솟값이 된다.


// !!!틀린코드인데 왜 안되는지 모르겠음 !!!!
// const fs = require('fs')
// const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filepath).toString()


// let num = Number(input)

// let cnt = 0
// //일단 숫자를 세줄 수 있는 것을 만들어준다.

// while (num > 1){
//     if( num % 3 === 0){
//         cnt ++;
//         num = num/3  
        
//         }
//     else if((num -1) % 3 === 0){
//         cnt = cnt + 2
//         num = (num-1)/3
        
//     }
//     else if(num % 2 ===0){
//         cnt ++;
//         num = num/2
        
//     }
//     else{
//         cnt ++
//         num = num - 1
//     }
    
// }

// console.log(cnt)