function solution(score) {
    // 1. score의 평균 점수를 구한다.
  	let avg = score.map(v=>(v[0]+v[1])/2);
  	console.log('avg', avg)
    console.log('avg-slice', avg.slice())
  	// 2. avg를 내림차순으로 정렬한 배열 sort를 선언한다.
    let sorted = avg.slice().sort((a,b)=>b-a);
    
    console.log('sorted', sorted)
  	
  	// 3. avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    return avg.map(v => sorted.indexOf(v) + 1);
}
