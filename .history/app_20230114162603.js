const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filepath).toString().trim().split('/\n/');
//trim함수는 앞과 뒤쪽의 공백을 제거하여 없애준다.
console.log(input[0]);

let list = input[1].split(' ')

//지금 해야되는게 input[1] = 1 5 6 7 이라는 값임 근데 이게말이되나?





//근데 왜 toString으로 받아와야함? 그냥 toString으로 받아오자 ㅇㅇ

// const cards = str.split('').map(v => parseInt(v))
// console.log(cards[1])

// const dp = new Array(parseInt(n)).fill(0)
//dp문제는 배열을 처음에 지정해주어야 한다.
// new Array 할 때 parseInt해주는 이유는 그 전에는 String형태라
// 그렇다. 그리고 fill함수를 이용해 0을 채워준다.

// for(let i = 1; i<=n; i++){
//     //현재 회차의 최댓값
//     for (let j = 1; j<= 1; j++){
//         dp[i] = Math.max(dp[i], dp[i-j]+cards[j-1]);
//         console.log(dp)
//     }
// }



// ex p1 = 1 p2 = 5 p3 = 6 p4 = 7
// 첫째 줄에 민규가 카드 N개를 갖기 위해 지불해야 
// 하는금액의 최댓값을 출력한다.

//첫번째 줄에 민규가 구매하려고 하는 카드의 개수 N이 주어진다.
//둘째 줄에는 Pi가 P1부터 Pn까지 순서대로 주어진다.

// 이게 그니까 모든 경우의 수를 나타내는 건데 for문으로 하면안된다.
// 왜냐하면 시간복잡도가 말이안되게 많아진다.


//bottom-up의 예제 아래에서부터 조금씩 위로

// cards [ 5, 2 , 8 ,10]
//        1원 2원 3원 4원
       
//        i가 1일 때 
//        dp[1] = max(dp[1], dp[0] + cards[1])
//                              0          5  
//        i가 2일 때 
//        1번째 카드 pick + 카드 1개 선택 dp[2] = max(dp[2], dp[1]+cards[2])

//        2번째 카드 pick + 카드 2개 선택 dp[2] = max(dp[2], dp[0]+cards[2])