function solution(clothes){
    let answer = 1;
    let map = new Map(); // map 생성
    
    clothes.forEach((v, i) => {
        v = v[1]; // v를 종류로 설정
        // map 안에 중복된 종류가 있으면 해당 값에 1을 더해주고
        if(map.has(v)) map.set(v, map.get(v)+1);
        // 그게 아니면 1만 설정해둔다
        else map.set(v, 1);
    })
    console.log(map)
    
    // 밑에 예시 방법대로 연산
    for(let x of map.values()) {
        console.log(x)
        answer *= (x+1);
        console.log(answer)
    }
    
    // 최소 1개 이상은 입으므로 아예 입지 않는 경우 1을 빼준다
    return answer - 1;
}