function solution(strings, n) {
    strings.sort((a,b) => {
        console.log('a',a)
        console.log('b',b)
        // if(a[n] < b[n])
        if(a[n] < b[n]) return -1
            else if(a[n] > b[n]) return 1
            else if(a < b) return -1
            else if( a > b) return 1
    })
    return strings
    
    
    
    
    //  let arr = [3,5,4]
    //  arr.sort((a,b) => a-b)
    // console.log(arr)
    // return strings;
}

// function solution(a,b){
//         a.sort((x, y) => {
//             if (x[b] < y[b]) {return -1;}
//             else if (x[b] > y[b]) {return 1;}
//             else if (x < y) {return -1;}
//             else if (x > y) {return 1;}
//             return 0
//         })
//         return a
//     }