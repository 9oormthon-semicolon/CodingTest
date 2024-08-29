function solution(seoul) {
    // "Kim"이 있는 위치를 찾기 위해 배열에서 "Kim"의 인덱스를 검색합니다.
    const index = seoul.indexOf("Kim");
    
    // 찾은 위치를 이용해 "김서방은 x에 있다"라는 문장을 만듭니다.
    return `김서방은 ${index}에 있다`;
}

// 예시 실행: ["Jane", "Kim"]이 들어오면 "김서방은 1에 있다"를 반환합니다.
console.log(solution(["Jane", "Kim"]));

/*
  indexOf
  ➡ JS에서 배열이나 문자열에서 특정 값이
     처음 나타나는 위치(index)를 찾아주는 메서드‼
     
	시간 복잡도
	0(n)
	indexOf 메서드는 최악의 경우 배열 전체를 순회해야 하므로
	배열의 길이에 비례하는 시간이 걸립니다.
	n은 배열의 길이입니다.
*/
