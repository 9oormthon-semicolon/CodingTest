function solution(k, tangerine) {
    const sizeCount = {};

    for (const size of tangerine) {
        sizeCount[size] = (sizeCount[size] || 0) + 1;
    }
 
    const sortedCounts = Object.values(sizeCount).sort((a, b) => b - a);
    
    let answer = 0;
    let sum = 0;

    for (const count of sortedCounts) {
        sum += count;
        answer++;
        if (sum >= k) break;
    }
    
    return answer;
}

/*
sizeCount 객체를 사용하여 각 크기의 귤 개수를 카운트
Object.values(sizeCount)로 개수만 추출하고, 이를 내림차순으로 정렬
정렬된 개수 배열을 순회하면서 k개를 채울 때까지 귤을 선택. 이때 선택한 종류의 수(answer)를 카운트
이 방법은 그리디 알고리즘을 사용하여 문제를 해결함
가장 많은 개수의 귤부터 선택함으로써 최소한의 종류로 k개를 채울 수 있음

시간복잡도 - O(n log n)
*/
