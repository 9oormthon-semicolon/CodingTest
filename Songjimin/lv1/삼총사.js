// number라는 배열을 매개변수로 받는 함수
function solution(number) {
		// 삼총사 조합을 찾을 때마다 카운트할 변수를 초기화
    let count = 0;
    
    // 첫 번째 학생을 선택
    /* number.length - 2까지 돌리는 이유는
	    뒤에 두 학생을 더 골라야 하기 때문 */
    for (let i = 0; i < number.length - 2; i++) {
        // 두 번째 학생 선택
        /* i + 1에서 시작하는 이유는
	        첫 번째 학생 뒤에서 고르기 위함 */
        for (let j = i + 1; j < number.length - 1; j++) {
            // 세 번째 학생 선택
            /* j + 1에서 시작해, 두 번째 학생 뒤에서 고름 */
            for (let k = j + 1; k < number.length; k++) {
                // 세 학생의 번호 합이 0인 경우
                /* 선택한 세 학생의 번호 합이 0이 되는지 확인함
	                0이 되면 삼총사 */
                if (number[i] + number[j] + number[k] === 0) {
                    count++;  // 삼총사를 발견하면 카운트 1 증가
                }
            }
        }
    }
    
    return count;  // 삼총사의 총 개수를 반환
}

console.log(solution([-2, 3, 0, 2, -5])); // 출력: 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 출력: 5
console.log(solution([-1, 1, -1, 1])); // 출력: 0


/*
  -시간 복잡도-
  이 코드는 세 명을 조합해서 고르기에
  👉 O(n^3)의 시간 복잡도를 가짐

  n = 학생의 수를 의미하며
  세 개의 for문을 사용해 모든 조합을 확인하기 때문에
  각 학생에 대해 중첩된 세 개의 반복문이 실행 됨
*/
