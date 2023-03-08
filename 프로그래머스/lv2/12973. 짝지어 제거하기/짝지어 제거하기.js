function solution(s) {
    const stack = []; // 스택 자료구조를 만듭니다.

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length-1] === char) {
            stack.pop(); // 스택에서 짝지어 제거할 문자열을 찾아서 제거합니다.
        } else {
            stack.push(char); // 스택에 새로운 문자를 추가합니다.
        }
    }

    return stack.length > 0 ? 0 : 1; // 스택에 남은 문자가 없으면 1, 있다면 0을 반환합니다.
}
