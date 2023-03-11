// function solution(priorities, location) {
//     let len = priorities.length
    
//     let arr = []
//     for (let i =0; i <len; i++){
//         arr.push(i)
//     }
    
//        console.log('원래 priorities' ,priorities)
//             console.log('원래 arr       ',arr)
//     for(let i =0; i<len; i++){
//         if(priorities[i] < Math.max(...priorities)){
//             let val = priorities[i]
//             priorities.splice(0,1)
//             priorities.push(val)
//             i = -1
//             let val2 = arr.splice(0,1)
//             arr.push(parseInt(val2.join('')))
            
//             console.log('priorities' ,priorities)
//             console.log('arr       ',arr)
//         }
//         else break
//     }
//     return arr.indexOf(location)+1;
// }
function solution(priorities, location) {
    let answer = 0;
    let pos_map = []
    let max_value = Math.max(...priorities);

    //1. position map 만들기
    for(let i = 0; i < priorities.length; i++){
        pos_map.push(i);
    }

    //2. 알고리즘 뽑기
    while(priorities.length != 0){
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            pos_map.push(pos_map.shift());
        }else {// priorities[0] >= max_value
            answer+=1;
            priorities.shift();
            if(pos_map.shift() == location)
                return answer;
            max_value = Math.max(...priorities);
        }
    }
}