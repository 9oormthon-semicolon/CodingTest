function solution(arr) {
    let answer = [0, 0];
    
    function quadCompress(row, column, size) {
        const topLeft = arr[row][column];
        let isAllSame = true;
        
        for (let i = row; i < row + size; i++) {
            for (let j = column; j < column + size; j++) {
                if (arr[i][j] !== topLeft) { // 다른 값이 있을 경우
                    isAllSame = false;
                    break;
                }
            }
            if (!isAllSame) break; // 다른 값이 있을 경우 문제 해결 멈춤
        }
        
        if (isAllSame) return topLeft === 0 ? answer[0]++ : answer[1]++;
        // 모두 같은 값일 경우 정답 배열에서 0이나 1에 해당하는 요소에 1만 더합니다. (압축)
        const coords = [[row, column], [row, column + size / 2], [row + size / 2, column], [row + size / 2, column + size / 2]];
        // 가로 1/2, 세로 1/2로 나누어 영역을 4개로 쪼갭니다.
        for (const [i, j] of coords) quadCompress(i, j, size / 2); 
        // 재귀, 쪼갠 영역들에 대해서 다시 압축 시도
    }
    quadCompress(0, 0, arr.length);
    return answer;
}
const arr = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];
console.log(solution(arr));

/*
압축하려는 영역의 좌측 상단 요소를 기준으로 모두 값이 같은지 확인하고
같으면 압축하여 1이나 0의 개수를 정답 배열 추가합니다.
압축이 되지 않으면 재귀 함수로 해당 영역을 가로 1/2, 세로 1/2 크기로 쪼개어
다시 압축 가능 여부를 확인하고 1이나 0을 추가합니다.

이 문제는 Divide and Conquer 문제?
문제를 4개의 하위 문제로 나눕니다. 
가장 상위 문제에서 한 변의 길이가 n일 때,
하위 문제의 크기는 각각 n^2/1, 4, 16, 64... 시간복잡도 O(n^2)

하위 문제 호출 횟수: 배열의 크기를 반으로 줄이기 때문에 최대 log2n
전체 시간복잡도는 O(n^2 * log2n)
*/