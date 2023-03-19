function solution(s) {
    s = s.split('')
    let point = 0
    for(let i = 0; i<s.length; i++){
        if(s[i] === ' ') point = 0
        else if(point % 2 === 0) {
            s[i] = s[i].toUpperCase() 
            point++
        }
        else if(point % 2 !== 0) {
            s[i] = s[i].toLowerCase() 
            point++
        }
        
        
    }
    return s.join('')
}