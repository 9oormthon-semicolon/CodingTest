function solution(s) {
    const stack = [];
  
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 스택 맨 위와 문자가 일치하면 맨 위 제거
        } else {
            stack.push(char); // 아니면 쌓음
        }
    }
    return stack.length === 0 ? 1 : 0; // 스택이 비었으면 성공 아니면 실패
}
/*
문자열 s를 순회하며 스택에 pop 또는 push 하기 때문에
시간복잡도는 O(n)
*/