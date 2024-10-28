function solution(num_str) {
    // 문자열을 배열로 변환하고 각 요소를 숫자로 변환한 후 더해줌
    // sum은 누적 합이고, digit은 현재 자릿수
    return num_str.split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(solution("123456789")); // 45
console.log(solution("1000000"));   // 1

/*
  const solution = num_str => [...num_str].reduce((acc, curr) => acc + Number(curr), 0)
*/
