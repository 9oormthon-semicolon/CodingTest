function solution(arr) {
    let answer = [0,0]; // [ 0의 개수, 1의 개수]
    
    function compress(x,y,size) {
        // 현재 영역의 모든 값이 같은지 확인
        // 재귀 종료는 사이즈가 1x1 까지 가면 isAllSameNum은 true 상태로 되어
        // 그 사이즈에 들어있는 값 0의개수 Or 1의개수 값을 ++
        const compareNum = arr[x][y];
        let isAllSameNum = true;
        
        for ( let i = x; i < x + size ; i++ ) {
            for (let j = y; j < y + size ; j++ ) {
                if (arr[i][j] !== compareNum) {
                    isAllSameNum = false;
                    break;
                }
            }
            if ( !isAllSameNum ) break;
        }
        
        // 모두 같은 값이라면 압축하고 개수 추가.
        if ( isAllSameNum ) {
            if( compareNum === 0) answer[0]++
            else answer[1]++
        } else {
            // 크기 절반으로 나누고 4개 영역 재귀 호출
            const halfSize = size / 2;
            compress(x,y,halfSize); // 왼쪽 위
            compress(x, y+halfSize, halfSize); // 오른쪽 위
            compress(x+halfSize, y, halfSize);  // 왼쪽 아래
            compress(x+halfSize, y+halfSize, halfSize); // 오른쪽 아래
        }
    }   
    compress(0,0,arr.length);
    
    return answer;
}

// 재귀의 끝판왕 같은,, 느낌 어렵네요 ㅠ
// 시간복잡도 : O(n^2)