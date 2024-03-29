function solution(elements){
    const set = new Set();
    
    for(let i = 1; i<= elements.length; i++ ){
        const els = elements.concat(elements.slice(0,i));
        
        for(let j = 0; j < elements.length; j++){
            set.add(els.slice(j,j+i).reduce((a,c) => a+c, 0));
        }
    
    }
    console.log(set.size)
    return set.size
}