function solution(str1, str2) {
    let jakad1 = []
    let jakad2 = []
    for(let i = 0; i<str1.length-1; i++){
        let test = str1.slice(i,i+2)
        if(test[0].toUpperCase() !== test[0].toLowerCase() && 
           test[1].toUpperCase() !== test[1].toLowerCase())
            jakad1.push(str1.slice(i,i+2))
    }
    
    for(let i = 0; i<str2.length-1; i++){
        let test2 = str2.slice(i,i+2)
        if(test2[0].toUpperCase() !== test2[0].toLowerCase() && 
           test2[1].toUpperCase() !== test2[1].toLowerCase())
            jakad2.push(str2.slice(i,i+2))
    }
    jakad1 = jakad1.map(v=> v.toUpperCase())
    jakad2 = jakad2.map(v=> v.toUpperCase())
 
    let 원래값jakad1 = jakad1.slice()
    let 원래값jakad2 = jakad2.slice()
    
    let 교집합 = []
    for(let i = 0; i<jakad1.length; i++){
        if(jakad2.includes(jakad1[i])){
            jakad2.splice(jakad2.indexOf(jakad1[i]),1)
            교집합.push(jakad1[i])  
        } 
    }
    if(!교집합) return 65536
    let 교집합len = 교집합.length
    let 합집합len = 원래값jakad1.length + 원래값jakad2.length - 교집합.length
    
    console.log(교집합len)
    console.log(합집합len)
    
    if(교집합len === 0 && 합집합len === 0) return 65536
    
    // 교집합과 합집합 모두 0 인 것뿐만 아니라, 교집합은 0인데 합집합은 0이 아닐 때 역시 고려해
    let res = Math.floor(교집합len/합집합len * 65536) 
    return res;
}