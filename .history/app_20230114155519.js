const fs = require('fs')
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let count = fs.readFileSync(filepath).toString();

//dp문제 => dp배열에 0을 모두 채워넣어야 한다.
dp = [0] * 10

console.log(dp)

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