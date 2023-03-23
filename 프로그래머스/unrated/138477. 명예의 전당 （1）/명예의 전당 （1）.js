function solution(k, score) {
    //k는 명예의 전당에 오를 수 있는 수 
    //일단 k개가 되기전에는 push
    
    let 명예의전당=[]
    let res = []
    for(let i = 0; i<score.length; i++){
        if(명예의전당.length < k) {
            명예의전당.push(score[i]) 
            res.push(Math.min(...명예의전당))
        }
        
        else{
            if(score[i] > Math.min(...명예의전당)){
                명예의전당.sort((a,b) => b-a).pop()
                명예의전당.push(score[i])
                res.push(Math.min(...명예의전당))
            }
            else res.push(Math.min(...명예의전당))
        }
    }
    return res;
}