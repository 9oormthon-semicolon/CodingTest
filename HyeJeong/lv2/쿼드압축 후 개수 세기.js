function solution(mat) {
    const res = [0, 0];
    
    const compress = (x, y, size) => {
        let compressible = true;
        const first = mat[x][y];
        
        for(let i = x; i < x + size; i++) { 
            for(let j = y; j < y + size; j++) {
                if(first !== mat[i][j]) {
                    compressible = false;
                    break;
                }
            }
            if(!compressible) break;
        }
        
        const half = Math.floor(size / 2);
        
        if(!compressible) {
            compress(x, y, half);               
            compress(x + half, y, half);       
            compress(x, y + half, half);      
            compress(x + half, y + half, half); 
        } else {
            res[first]++;
        }
    }
    
    compress(0, 0, mat.length);
    return res;
}

/*
solution 함수는 2차원 배열 mat를 입력받음
res 배열은 [0의 개수, 1의 개수]를 저장하기 위해 초기화
compress 함수는 재귀적으로 배열을 압축하는 핵심 로직
x, y는 현재 검사할 영역의 시작 좌표, size는 영역의 크기
먼저 현재 영역의 모든 값이 같은지 확인. 모든 값이 같으면 compressible은 true로 유지되고, 다른 값이 있으면 false
압축이 가능하지 않으면(!compressible), 영역을 4등분하여 각 부분에 대해 재귀적으로 compress를 호출
압축이 가능하면, res 배열의 해당 인덱스(0 또는 1)의 값을 증가시킴
초기에 compress(0, 0, mat.length)를 호출하여 전체 배열에 대해 압축 시작
최종적으로 res 배열을 반환하여 압축 후 남은 0과 1의 개수를 알려줌

시간복잡도 - O(N² * log N)
(gpt 참고)
각 재귀 단계에서 현재 영역의 모든 요소를 검사. 첫 번째 단계에서는 N² 개의 요소를 검사하고, 그 다음 단계에서는 (N/2)² * 4 = N² 개의 요소를 검사
총 연산 횟수는 각 단계에서 N² 개의 요소를 검사하고, 총 log₄N 단계가 있으므로, 총 연산 횟수는 N² * log₄N이 됨
*/
