function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations.length; i++) {
        if (i >= citations[i]) {
            return i;
        }
    }
    
    return citations.length;
}

/*
인용 횟수를 내림차순으로 정렬. 이렇게 하면 가장 많이 인용된 논문부터 순서대로 확인할 수 있음
정렬된 배열을 순회하면서 현재 인덱스 i가 현재 논문의 인용 횟수 citations[i]보다 크거나 같아지는 시점을 찾음. 이 시점이 바로 H-INDEX
조건을 만족하는 시점을 찾으면 해당 인덱스 i를 반환
만약 모든 논문이 자신의 인덱스보다 많이 인용되었다면, 전체 논문의 개수를 반환

시간복잡도 -  O(n log n)
정렬에 O(n log n)이 소요되고, 이후 한 번의 순회로 H-INDEX를 찾을 수 있음
*/
