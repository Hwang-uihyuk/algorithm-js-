function solution(s){
    s = s.toLowerCase()
    let cntp = 0
    let cnty = 0
    for(let i = 0 ; i<s.length; i++){
         if(s[i] === "p") cntp ++
         else if(s[i] === "y") cnty ++
    }
    
    return (cntp === cnty ? true : false);
}