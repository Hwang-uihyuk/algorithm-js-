function solution(name, yearning, photo) {
    let res = []
    for(let i = 0 ; i<photo.length; i++){
        let hap = 0
        for(let j = 0; j<photo[i].length; j++){
            if(name.includes(photo[i][j])){
                hap += yearning[ name.indexOf(photo[i][j])]
            }
        }
        res.push(hap)
    }
    return res;
}