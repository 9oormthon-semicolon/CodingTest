function solution(brown, yellow) {
    // 전체 카펫의 넓이: 갈색과 노란색을 더한 값
    const total = brown + yellow;

    // 세로 길이를 3부터 시작 (테두리 때문에 최소 3이어야 함)
    for (let height = 3; height <= Math.sqrt(total); height++) {
        // 가로 길이는 전체 넓이를 세로 길이로 나눈 값
        let width = total / height;

        // 가로가 정수인지 확인하고, 가로가 세로보다 크거나 같은지 확인
        if (total % height === 0 && width >= height) {
            // 가운데 노란색 부분의 크기가 정확한지 확인
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height]; // 가로, 세로 반환
            }
        }
    }
}
