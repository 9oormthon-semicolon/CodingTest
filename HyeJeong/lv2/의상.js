function solution(clothes) {
    const clothesMap = new Map();

    for (const [name, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }
    
    let answer = 1;

    for (const count of clothesMap.values()) {
        answer *= (count + 1);
    }

    return answer - 1;
}

/*
Map 객체를 사용하여 의상 종류별로 개수를 세어 저장
각 의상 종류별로 (해당 종류의 의상 개수 + 1)을 곱함
'+1'은 해당 종류의 의상을 입지 않는 경우를 포함시키는 것
모든 종류의 의상을 입지 않는 경우는 제외해야 하므로, 최종 결과에서 1을 뺌

시간 복잡도 - O(n + k)
의상을 분류하는 과정: O(n) n은 clothes 배열의 길이
조합을 계산하는 과정: O(k) k는 의상 종류의 수
따라서 전체 시간 복잡도는 O(n + k)
*/
