// brown + yellow = x * y
// y = (brown + yellow) / x
// x = (brown + yellow) / y

function solution(brown, yellow) {
    // 전체 수
    const total = brown + yellow;
    
    // y는 x와 같거나 작음(y는 무조건 3 이상)
    // x = (brown + yellow) / y를 이용하여 순회
    for (let y = 3; y <= total / y; y++) {
        // brown + yellow = x * y을 이용하여
        // 전체 수를 y로 나눴을 때 정수일 경우 
        if(total % y === 0){
            // x값 설정
            let x = total / y
            // 갈색부분이 노란부분을 감싸고 있음
            // 따라서 양옆과 위아래를 제거하고 곱한 것이 노란색의 수임
            if((x - 2) * (y - 2) === yellow) return [x, y]
        }
    }
}

/* 시간 복잡도
 - for (let y = 3; y <= total / y; y++) : O(sqrt(n))
    * total / y가 y보다 작아지면 루프 종료 
    * y가 sqrt(total)를 넘어서면 total / y는 y보다 작아짐
    * 따리서 sqrt(n)번 만큼 순회

 => 전체 시간 복잡도 : O(sqrt(n))
*/