function solution(citations) {
    citations.sort((a, b) => a - b); 
    for (let idx = 0; idx < citations.length; idx++) {
        let citation = citations[idx]; // 현재 인덱스의 인용 횟수
        if (citation >= citations.length - idx) {
            // 현재 논문의 인용 횟수가 남은 논문의 수 이상이묜
            return citations.length - idx; // 이 인덱스가 H인덱스
        }
    }
    return 0;
}

const citations = [3,0,6,1,5];
console.log(solution(citations));

/*
sort 함수를 사용했기 때문에 시간복잡도 O(NlogN)
*/