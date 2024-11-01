function solution(n, stations, w) {
    let answer = 0;
    const range = w * 2 + 1; // 전파의 범위 (설치한 아파트 앞뒤로 W)
    let pos = 1; // 전파가 닿지 않는 범위를 계산하기 위한 기준점 (왼쪽 끝)
    let distances = []; // 전파가 전달되지 않는 범위들의 배열
    for (const station of stations) {
        let noGiji = station - w - pos;
        if (noGiji > 0) distances.push(noGiji);
        pos = station + w + 1;
    }
    if(pos <= n) distances.push(n - pos + 1);
    distances.map((distance) => answer += Math.ceil(distance / range));

    return answer;
}

const N = 11, stations = [4, 11], W = 1;
// n 아파트 개수, 기지국이 설치된 아파트 번호, 전파 도달거리 1
console.log(solution(N, stations, W));

/*
시간복잡도는 O(N)
*/
