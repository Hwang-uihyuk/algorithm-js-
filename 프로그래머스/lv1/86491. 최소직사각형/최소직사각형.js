function solution(sizes) {
    let flat_size = sizes.flat().sort((a,b) => b-a)
    
    let big  = Math.max(...flat_size)
    
     sizes = sizes.map((v) => Math.min(...v))
    let big2 = Math.max(...sizes)
    return big*big2;
}