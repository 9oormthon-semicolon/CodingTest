function solution(n, k) {
		// 양꼬치 1인분 가격
    const pricePerKoreanLambSkewers = 12000;  
    // 음료수 1개 가격
    const pricePerDrink = 2000;  
    
    // 서비스 음료수 개수
    const freeDrinks = Math.floor(n / 10);
    
    // 실제 지불해야 할 음료수 개수
    const paidDrinks = k - freeDrinks > 0 ? k - freeDrinks : 0;

    // 총 비용 계산
    const totalCost = (n * pricePerKoreanLambSkewers) + 
	    (paidDrinks * pricePerDrink);
    return totalCost;
}

console.log(solution(10, 3));  // 124000
console.log(solution(64, 6));  // 768000

/*
  다른 사람이 푼 문제
  function solution(n, k) { 
    k -= ~~(n / 10);  // 서비스 음료수 개수를 계산하여 k에서 뺍니다.
    if (k < 0) k = 0; // k가 0보다 작으면 0으로 설정합니다.
    return n * 12000 + k * 2000; // 총 비용을 계산하여 반환합니다.
  }
*/
