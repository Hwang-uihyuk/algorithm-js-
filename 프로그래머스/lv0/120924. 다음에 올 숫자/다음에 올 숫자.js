function solution(common) {
    //등차수열인 경우
    let a = common[0]
    if(common[0] - common[1] === common[1] - common[2]){
        return a + (common.length)*(common[1] - common[0])
    } 
    
    //등비수열인경우
    if(common[0] / common[1] === common[1] / common[2]){
        return a * Math.pow((common[1]/common[0]),common.length)
    } 
}