function solution(s) {
    var answer = -1;
    let cnt = 0
    s = s.split('')
    for(let i = 0; i<s.length; i++){
        let stack = [];
        for(let j = 0; j<s.length; j++){
            if(s[j] === '(') stack.push('(')
            else if(s[j] === '[') stack.push('[')
            else if(s[j] === '{') stack.push('{')
            
            
            else if(s[j] === ')') {
                if(stack[stack.length-1] === '(' )
                    stack.pop();
                else {
                    stack.push('x')
                    break;
                }
            
        }
            else if(s[j] === ']') {
                if(stack[stack.length-1] === '[' )
                    stack.pop();
                else {
                    stack.push('x')
                    break 
                     };
            }
            
            else if(s[j] === '}') {
                if(stack[stack.length-1] === '{' )
                    stack.pop();
                else {
                    stack.push('x')
                    break
                }
            }
        }

        if(stack.length === 0) cnt ++
        let res = s.shift()
        s.push(res)
    }
    return cnt;
}