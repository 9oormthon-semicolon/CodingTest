function solution(clothes) {
    let answer = 1; // 곱셈 땜에 1로 일단 설정
    let typeCount = {}; // 의상 종류별 저장

    // 각 의상 종류별 개수 세기
    clothes.map((cloth) => {
        typeCount[cloth[1]] = (typeCount[cloth[1]] || 0) + 1;
    });

    // 각 의상 종류에서 "입지 않는 경우"를 포함한 선택지를 계산
    Object.values(typeCount).forEach((count) => {
        answer *= (count + 1); 
        // count + 1을 하는 이유는 입지 안 입는경우 때문에.
        // 예를들어 모자 2종류가 있다면 (노란모자, 빨간모자, 모자 안쓰는 경우) 총 경우의 수 3가지
    });

    return answer - 1; // 각각 종류 별로 안쓰는 경우가 있어서 그 조합만 -1
}

// 배열의 길이를 nnn, 의상 종류의 수를 kkk라 할 때, 
// 코드의 전체 시간 복잡도는 O(n+k)O(n+k)O(n+k)