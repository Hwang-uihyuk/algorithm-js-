function solution(t, p) {
    //t = 3141592   //p = 271   
    let cnt = 0
    for(let i=0; i<=t.length-p.length; i++){
        let test = t.substring(i, i + p.length);
        if(test <= p)
            cnt ++
    }
    return cnt;
}