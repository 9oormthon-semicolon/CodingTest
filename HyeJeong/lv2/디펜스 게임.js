function solution(n, k, enemy) {
    if (k >= enemy.length) return enemy.length;
    
    let left = k;
    let right = enemy.length;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sliced = enemy.slice(0, mid);
        const sorted = sliced.sort((a, b) => b - a);
        const sum = sorted.slice(k).reduce((acc, cur) => acc + cur, 0);
        
        if (sum <= n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}

/*
이진 탐색을 사용하여 가능한 최대 라운드 수를 찾는 것
각 이진 탐색 단계에서 mid까지의 적 수를 내림차순으로 정렬
정렬된 배열에서 k개의 가장 큰 값을 제외한 나머지의 합을 계산
이 합이 n 이하라면 더 많은 라운드를 진행할 수 있으므로 left를 증가시키기
합이 n을 초과하면 라운드 수를 줄여야 하므로 right를 감소시킴
최종적으로 right 값이 최대로 진행할 수 있는 라운드 수

시간복잡도 - O(n log n * log n) 
이진 탐색이 log n 번 실행되고 각 단계에서 정렬에 n log n의 시간이 소요되기 때문

굉장히 헤맨 문제..
*/
