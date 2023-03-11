function solution(cacheSize, cities) {
    let answer = 0;
    cities = cities.map(e => e.toLowerCase());
    console.log('cities', cities)
    let arr = [];
    let len = cities.length;
    console.log('cities의 길이', len)
    if (cacheSize === 0) {return 5 * len;
    console.log('cacheSize가 0일때', len)}
    for(let i = 0; i < len; i++) {
        let idx = arr.findIndex((x) => x === cities[i]);
        if(idx !== -1){ // 히트
            arr.splice(idx, 1);
            answer += 1;
        } else if (arr.length === cacheSize) { // 꽉참
            answer += 5;
            arr.shift();
        } else {
            answer += 5;
        }
        arr.push(cities[i]);
    }
    

    return answer;
}