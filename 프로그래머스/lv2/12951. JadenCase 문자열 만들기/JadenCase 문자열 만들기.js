// function solution(s) {
//     s = s.toLowerCase().split(' ')
//     s = s.map(v => v !=='' ? v[0].toUpperCase()+v.slice(1,v.length) : '').join(' ')
//     // test = 'my. name   is hyu'
//     // console.log(test.split(' '))
//     //공백문자를 조심하자.
    
//     let test = ["ay", "", "boy","test"]
//     console.log(test.map(v => v !== "" ? v[0].toUpperCase()+v.slice(1,v.length ): '').join(''))
//     for(let i =0; i<test.length; i++){
//         if(test[i] !== '') test[i] = test[i][0].toUpperCase() + test[i].slice(1,test[i].length)
//         console.log(test[i])
//         console.log(test.join(' '))
//     }
//     return s;
// }

//공백문자가 연속해서 나올 수 있다.
// function solution(s){
//     s = s.toLowerCase().split(' ')
//     console.log(s)
//     s = s.map(v => v ==='' ? '' : v[0].toUpperCase()+v.slice(1,v.length) ).join(' ')
//     return s
// }


// function solution(s){
//     s = s.toLowerCase()
//     s = s.split(' ').map(v => v[0].toUpperCase() + v.slice(1, v.length))
//     console.log(s)
//     const test = ["a"]
//     console.log(test[0][0].toUpperCase() + test[0].slice(1)) //이게출력이안됨 ㅇㅇ indexOut이 나옴
//     //그니가 ""이거에서는 v.slice()가 안된다는거지 indexOut이 나옴 ㅇㅇ
    
//     return s.join(' ')
// }

function solution(s){    
    s = s.toLowerCase()
    s = s.split(' ').map(v => v === '' ? '' : v[0].toUpperCase() + v.slice(1))
    return s.join(' ')
}