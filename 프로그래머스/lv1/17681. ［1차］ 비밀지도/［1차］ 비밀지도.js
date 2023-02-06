function solution(n, arr1, arr2) {
    // arr1 = arr1.map(v => v.toString(2)).join(' ').replace(/1/g,"#")
    arr1 = arr1.map(v =>v.toString(2))
    for(let i = 0; i<arr1.length; i++){
    while(n != arr1[i].length){
        arr1[i] = '0' + arr1[i]
    }
    }
   // arr2 = arr2.map(v => v.toString(2)).join(' ').replace(/1/g,'#')
    arr2 = arr2.map(v => v.toString(2))
for(let i = 0; i<arr2.length; i++){
    while(n != arr2[i].length){
        arr2[i] = '0' + arr2[i]
    }
    }
    
    arr1 = arr1.map(v => v.replace(/1/g,'#'))
    arr2 = arr2.map(v => v.replace(/1/g, '#'))
    
    let res = []
    for(let i = 0 ; i <n; i++){
        let answer= ''
        for(let j = 0; j<n; j++){
        if(arr1[i][j] === '#' || arr2[i][j] === '#'){
            answer += "#"
        }
        else 
            answer += " "
        }
        res.push(answer)
    }
    console.log(res)
    return res;
}