function solution(n, works) {
    if (works.reduce((a, b) => a + b) <= n) return 0;

    const sorted = works.sort((a, b) => a - b);
    const len = works.length;

    while (n) {
        const max = sorted[len - 1];
        for (let i = len - 1; i >= 0; i--) {
            if (sorted[i] >= max) {
                sorted[i]--;
                n--;
                if (!n) break;
            } else {
                break;
            }
        }
    }

    return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}

/*
그리디(Greedy) 알고리즘을 사용하였음
모든 작업을 처리할 수 있는 경우(총 작업량이 주어진 시간 이하인 경우)를 체크하여 0을 반환
작업량 배열을 오름차순으로 정렬
가장 큰 작업량을 1씩 줄여나가는 방식으로 작업을 수행
주어진 시간(n)을 모두 소진할 때까지 이 과정을 반복
마지막으로 남은 작업량의 제곱의 합을 계산하여 반환

시간복잡도 - O(n * log m)
n번 반복하며, 각 반복에서 최대 m개의 요소를 조정
정렬된 배열의 끝에서부터 순회하므로, 최악의 경우 m번의 비교가 필요
*/
