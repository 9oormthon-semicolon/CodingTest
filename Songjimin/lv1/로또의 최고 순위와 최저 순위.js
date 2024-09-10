function solution(lottos, win_nums) {
	//1. 알아볼 수 없는 숫자(0)의 개수를 셈
	const zeroCount = lottos.filter(num => num === 0).length;
	
	//2. 알아볼 수 있는 번호 중 당첨된 번호의 개수를 셈
	const matchCount = lottos.filter(num => win_nums.includes(num)).length;
	
	//3. 최고 순위는 matchCount에 0이 전부 맞았다고 가정한 경우
	const maxRank = getRank(matchCount + zeroCount);
	
	//4. 최저 순위는 matchCount에 0이 전부 틀렸다고 가정한 경우
	const minRank = getRank(matchCount);
	
	//5. [최고 순위, 최저 순위]를 반환함
	return [maxRank, minRank];
}

// 로또 순위를 계산하는 함수
function getRank(matchCount) {
	switch(matchCount) {
		case 6: return 1;  // 6개 맞으면 1등
		case 5: return 2;  // 5개 맞으면 2등
		case 4: return 3;  // 4개 맞으면 3등
		case 3: return 4;  // 3개 맞으면 4등
		case 2: return 5;  // 2개 맞으면 5등
		default: return 6;  // 그 외는 6등
	}
}

/*
  - 시간 복잡도 -
  zeroCount & matchCount 계산하기 위해
  각각 filter 메서드 사용하므로, 두 번의 O(n) 반복 있습니다.
  따라서 이 알고리즘의 시간 복잡도는 O(n)이며
  여기서 n은 lottos의 길이(6)입니다.
  배열 크기가 고정된 6이기에, 이 문제에선 효율적으로 해결됩니다.
*/
