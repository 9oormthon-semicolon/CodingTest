function solution(N) {
		/* battery : 
			필요한 건전지 사용량을 저장하기 위한 변수
			처음에는 0으로 설정 */
    let battery = 0;

		// N이 0보다 클 동안 계속 반복
    while (N > 0) {
        /*
	        N이 홀수인지 확인함
	        홀수라면 현재 위치에서 한 번 점프가 필요하므로
	        배터리 사용량을 1증가 시킴
        */
        if (N % 2 === 1) {
            battery++;  
        }
        
        // 순간 이동 모방하기 위해 N을 2로 나눔
        N = Math.floor(N / 2);
    }

    return battery;  // 최종 배터리 사용량을 반환
}

/*
  Math.floor()
  Math.floor(4.9) // 4
  Math.floor(4.1) // 4
  Math.floor(7.99) // 7
  Math.floor(-3.5) // -4 (음수일 경우 더 작은 정수로 내려갑니다)

	시간 복잡도 -> 0(log N)
	이는 N을 2로 계속 나누므로
	이진수로 변환했을 때의 길이만큼 반복하기 때문
	10억인 경우에도 최대 30번 정도의 반복만 필요함
*/
