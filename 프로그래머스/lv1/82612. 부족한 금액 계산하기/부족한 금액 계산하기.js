function solution(price, money, count) {
    let res = 0
    let Cntprice = 0 
    for(let i = 1; i<=count; i++){
        Cntprice = price * i
        res = res + Cntprice
    }

    return res-money>0 ? res-money : 0;
}