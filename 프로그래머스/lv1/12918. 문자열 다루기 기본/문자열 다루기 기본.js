function solution(s) {
    let res  = s.split('').map((a)=>+a).filter(a => Number.isInteger(a)===false)
    if(s.length === 4 && res.length===0) return true
    if(s.length === 6 && res.length===0) return true
    return false
}