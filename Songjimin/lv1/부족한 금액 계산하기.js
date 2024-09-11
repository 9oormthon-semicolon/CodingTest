function solution(price, money, count) {
	// 놀이기구 타는데 필요한 총 금액을 저장하는 변수
	let totalCost = 0;  
	
	// 놀이기구를 count번 탈때까지의 총 금액 계산
	for (let i = 1; i <= count; i++) {
		totalCost += price * i;  // i번째 탈 때의 가격은 price * i
	}
	
	// 모자란 금액을 계산, 만약 부족하지 않으면 0을 반환
	let shortage = totalCost - money;
	
	// 부족하면 그 금액을 반환, 부족하지 않으면 0을 반환
	return shortage > 0 ? shortage : 0; 
}
