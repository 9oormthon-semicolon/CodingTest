function solution(babbling) {
    // 조카가 발음할 수 있는 네 가지 단어를 배열에 저장
    const possible = ["aya", "ye", "woo", "ma"];
    // 발음할 수 있는 단어의 개수를 저장할 변수를 선언하고 0으로 초기화
    let count = 0;  
    
    // babbling 배열의 각 단어를 하나씩 검사하기 위해 forEach 함수 사용
    babbling.forEach(word => {
		    /* 현재 단어를 validWord라는 변수에 저장
			    이 변수를 수정하면서 발음할 수 있는지를 확인함 */
        let validWord = word;
        
        // 발음 가능한 네 가지 단어("aya", "ye", "woo", "ma")를 차례대로 검사
        for (let i = 0; i < possible.length; i++) {
		        // 연속된 발음 예시 ("ayaaya", "yeye" 등)
            let doubleSound = possible[i] + possible[i];  
	          // 연속된 발음이 있으면 무시
            if (validWord.includes(doubleSound)) return;  
            
            // 발음 가능한 단어를 " "로 대체하여 확인
            validWord = validWord.replaceAll(possible[i], " ");
        }
        
        /* 단어가 전부 발음 가능한 조합으로 이루어져 있으면 공백만 남음
	        공백만 남으면 발음 가능한 단어이므로 count 1증가 시킴 */
        if (validWord.trim() === "") count++;
    });
    
    // 모든 단어를 검사한 후, 발음할 수 있는 단어의 개수를 반환
    return count;
}
