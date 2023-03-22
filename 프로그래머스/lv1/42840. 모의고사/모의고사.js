function solution(answers) {
    var one = [1,2,3,4,5] //5
    var two = [2,1,2,3,2,4,2,5] // 8
    var three = [3,3,1,1,2,2,4,4,5,5] //10
    
    let arr = [0,0,0]
    
    //만약 20이라고치면 
    let val1 = Math.ceil(answers.length / one.length) 
    let val2 = Math.ceil(answers.length / two.length)
    let val3 = Math.ceil(answers.length / three.length)
    
    one = one.join('').repeat(val1).split('').map(v => +v)
    two = two.join('').repeat(val2).split('').map(v => +v)
    three = three.join('').repeat(val3).split('').map(v => +v)
    
    
    for(let i = 0 ; i<answers.length; i++){
        
        if(answers[i] === one[i]) arr[0]++
        if(answers[i] === two[i]) arr[1]++
        if(answers[i] === three[i]) arr[2] ++
    }
    
    
    const answer = [];
    const MaxValue = Math.max(...arr);
    let index = 0;
    for(let i = 0; i<3; i++){
        if(MaxValue === arr[i]){
            answer[index] = i+1;
            index++;
        }
    }
    return answer;
}