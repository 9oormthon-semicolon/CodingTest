function solution(arr) {
    let zero = 0, one = 0
    
    const isTrue = (x, y, size) => {
        //길이가 1이면 true 반환
        if (size === 1) return true
        
        const fstVal = arr[x][y]
        
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                //전체 값이 같아야 하기에 첫 번째 값과 다르면 무조건 false 반환
                if (fstVal !== arr[i][j]) return false
                    
            }
        }
        //전부 같은 숫자
        return true
    };
    
    (function QuadZip (x, y, size) {
        //탐색한 정사각형안에 값이 모두 같다면 해당하는 숫자++
        if (isTrue(x, y, size)) arr[x][y] === 0 ? zero++ : one++
        
        //사각형 내 값이 전부 일치하지 않는다면 분기를 4분할 하여 탐색
        else { 
            const halfSize = size / 2
            
            QuadZip(x, y, halfSize)
            QuadZip(x, y + halfSize, halfSize)
            QuadZip(x +  halfSize, y, halfSize)
            QuadZip(x + halfSize, y + halfSize, halfSize)
            
        }
        
    })(0 ,0 ,arr.length)

    return [zero, one]
}


/*
    특정 영역의 숫자가 모두 같으면 같은 숫자의 영역을 압축해서 숫자를 세면 되는 문제
    무조건 정사각형
    
    1. 영역안의 숫자가 전부같으면 T 아니면 F를 리턴하는 함수
    2. 사각형을 재귀적으로 탐색해서 모두 값을 값이 되거나 크기가 1이될 때까지 쪼개서 분기를 나눠서 풀었습니다.
    
    4분기로 나누는 과정이 최악일 경우 log₂(N)
    값이 전부 같은지 판별하는 과정이 O(N²)
    
    O(N²log(N))
    
    재귀 분할 이해하기 좋은 문제 같네용 근데 좀 어려운
    
*/