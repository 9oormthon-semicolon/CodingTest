function solution(num) {
	
	// 반복 횟수를 저장하는 변수
	let count = 0;
	
	// 주어진 수가 1이 아닐때까지 반복
	while (num !== 1) {
		// 주어진 작업을 500번 이상 반복했으면 -1 반환
		if (count === 500) return -1;
		
		// 짝수일 땐 2로 나누고, 홀수일 땐 3을 곱하고 1을 더함
		if (num % 2 === 0) {
			num /= 2;
		} else {
			num = num * 3 + 1;
		}
		
		// 작업을 할 때마다 횟수를 증가
		count++;
	}
	
	// 1이 되면 반복 횟수를 반환
	return count;
}

// 테스트 실행
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1

/*
-시간 복잡도-
숫자가 1이 될 때까지 작업을 반복하는데
최악의 경우 500번까지 반복하므로 O(1)로 간주 할 수 있음
최대 500번 이내에 종료됨
*/
