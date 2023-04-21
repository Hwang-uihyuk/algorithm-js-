// function solution(babbling) {
//     const can = ['aya','ye','woo','ma'];
//     let count = 0;
    
//     for(let i = 0; i < babbling.length; i++){
//         let babble = babbling[i];
        
//         for(let j = 0; j < can.length; j++){
//             if(babble.includes(can[j].repeat(2))){
//                 break;
//             }
            
//             babble = babble.split(can[j]).join(" ");
//         }
        
//         if(babble.split(" ").join("").length === 0){
//             count += 1;
//         }
//     }
    
//     return count;
// }
function solution(babbling){
    let can = ["aya", "ye", "woo", "ma"] //이것만 발음할 수 있고
                                         //연속해서 두번발음은 몬함.
    let count = 0 
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i] //babbling[0] 는 "aya"
        for(let j = 0; j<can.length; j++){
            if(babble.includes(can[j].repeat(2))) //연속 2번나오면 안된다.
                break;
            babble = babble.split(can[j]).join(' ')
            console.log(babble)
        }
        if(babble.split(" ").join("").length === 0){
            count += 1;
    }}
    return count
}