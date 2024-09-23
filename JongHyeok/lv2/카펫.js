function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let width = 3; width <= Math.sqrt(total); width++) {
        if (total % width === 0) {
            const height = total / width; // 넓이는 너비 * 높이
            
            if ((width - 2) * (height - 2) === yellow) { // 너비-2 & 높이-2인 부분이 노란색 부분이기 때문
                return [height, width];
            }
        }
    }
}

/*
전체 넓이는 갈색과 노란색 격자의 수
너비를 3부터 (갈색 테두리가 있으려면 너비가 3이상)
total의 제곱근까지 검사

[너비 * 높이 = 갈색 + 노란색 = total 이며,
너비가 넓이의 제곱근과 같으면 정사각형, 넓이의 제곱근보다 크면 높이는 넓이의 제곱근보다 작은 직사각형 모양
(제한사항: '카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.')

가능한 너비들로 순회하며 넓이가 너비로 나누어 떨어지면서
너비-2 * 높이-2가 노란색의 넓이와 맞을 때 정답]

brown이 n, yellow가 m 이라고 가정했을 때
시간복잡도는 O(sqrt(n+m))
*/
