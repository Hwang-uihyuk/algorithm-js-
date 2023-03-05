function solution(quiz) {
    var answer = [];
    
    for(let i =0; i<quiz.length; i++){
            let val = quiz[i].split(' ')
            let val_arr = Number(val[0])
        for(let j =0; j<val.length; j++){
                console.log(val)
                if(val[j] === '+') val_arr = val_arr + Number(val[j+1])
                else if(val[j] === '-') val_arr = val_arr - Number(val[j+1])
                else if(val[j] === '=') {
                    val_arr === Number(val[j+1]) ? answer.push("O") : answer.push('X')
                }
            console.log(val_arr)
        }
    }
    return answer;
}