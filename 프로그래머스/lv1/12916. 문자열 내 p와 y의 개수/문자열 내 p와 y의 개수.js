function solution(s){
    s = s.toLowerCase()
    let Pcnt = 0
    let Ycnt = 0
    for(let x of s){
        if(x ==='p') Pcnt++
        else if(x ==='y') Ycnt++
    }
    console.log(Pcnt,Ycnt)
    if(Pcnt === 0 && Ycnt ===0) return true
    return Ycnt===Pcnt? true : false;
}