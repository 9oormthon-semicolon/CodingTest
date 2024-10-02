function solution(num, n) {
	// num이 n의 배수인지 확인
	return num % n === 0 ? 1 : 0;  // num이 n으로 나누어떨어지면(즉, n의 배수이면) 1을 반환, 그렇지 않으면 0을 반환
}

console.log(solution(98, 2));  // 1
console.log(solution(34, 3));  // 0	
