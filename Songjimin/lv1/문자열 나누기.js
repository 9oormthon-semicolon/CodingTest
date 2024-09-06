function solution(s) {
    let count = 0;  // 부분 문자열의 개수를 셀 변수
    let i = 0;      // 문자열의 현재 인덱스
    let length = s.length;  // 문자열의 길이 지정
    
    // 문자열을 끝까지 읽기 위해 반복
    while (i < length) {
        let x = s[i];      // 첫 번째 글자를 x로 설정
        let countX = 0;   // x의 횟수를 세기 위한 변수
        let countNotX = 0; // x가 아닌 글자의 횟수 세기 위한 변수
        
        // 현재 x로 시작하는 부분 문자열을 찾기 위한 반복문
        while (i < length) {
		        // 현재 문자가 x인지 아닌지에 따라 카운트
            if (s[i] === x) {
                countX++;
            } else {
                countNotX++;
            }
            
            // x와 x가 아닌 글자의 횟수가 같아지면 분리
            /* 두 카운트가 같으면 부분 문자열을 분리하고
	            다음 문자를 읽기 위해 인덱스를 증가 시킴 */
            if (countX === countNotX) {
                count++;
                i++;
                break;
            }
            i++;
        }
        
        // 모든 글자를 다 읽었지만 횟수가 같지 않은 경우
        /* 문자열의 끝까지 도달했지만
	        카운트가 같지 않으면 현재 읽은 문자열을 분리 */
        if (countX !== countNotX) {
            count++;
        }
    }
    
    return count; // 부분 문자열의 총 개수를 반환
}

// 예제 입력 및 결과 출력
console.log(solution("banana")); // 출력: 3
console.log(solution("abracadabra")); // 출력: 6
console.log(solution("aaabbaccccabba")); // 출력: 3


/*
  -시간 복잡도-
  이 알고리즘은 문자열을 한 번 순회하면서
  각 문자를 한번 씩 만 처리하기에 시간 복잡도 = O(n)
  여기서 n = 문자열의 길이
  문자열의 길이가 10,000까지 허용되기 때문에 충분히 효율적
*/
