function solution(n, works) {
    // 총 작업량이 n보다 작으면 0 반환
    if(n >= works.reduce((acc, cur) => acc + cur)) return 0;
    // 가장 작업량이 많은 일 순으로 나열
    const sortedWorks = works.sort((a, b) => b - a);
    while(n != 0) {
        const max = sortedWorks[0];
        // 작업량 줄임
        for(i = 0 ; i < sortedWorks.length; i++) {
            if(sortedWorks[i] >= max) {
                n--
                sortedWorks[i]--
            }
            if(!n) break
        };
    };
    // 남은 일 작업량 제곱하여 더함
    return works.reduce((acc, cur) => acc + cur**2, 0)
}

const works = [4,3,3];
const n = 4;
console.log(solution(n, works));

/*
n이 N, works의 길이가 M일 때
시간복잡도 O(MlogM + N*M)
*/