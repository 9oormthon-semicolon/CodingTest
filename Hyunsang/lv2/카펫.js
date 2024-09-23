function solution(brown, yellow) {
    // (brown + yellow)의 합을 나누는 길이(i)를 3부터 시작하여 반복
    // i는 최소 3부터 시작하며, 나눗셈 결과를 i로 나눌 수 있는 최대 범위까지 반복
    for (var i = 3; i <= (brown+yellow)/i; i++) {
        
        // x는 가로 길이로, (brown + yellow)를 i로 나눈 몫
        var x = Math.floor((brown+yellow)/i);
        
        // 가로에서 2칸, 세로에서 2칸을 뺀 내부 영역의 크기가 yellow와 같은지 확인
        // 즉, 테두리(brown 부분)를 제외한 내부 영역(yellow 부분)이 맞는지 확인
        if( (x-2)*(i-2)=== yellow) {
            return [x,i]; // 가로(x)와 세로(i)의 배열을 반환
        }
    }

}

/**
 * 시간복잡도:
 * for 루프는 세로 길이 i를 3부터 (brown + yellow) / i까지 반복 
 * 즉, i는 대략적으로 O(√(brown + yellow))까지 증가
 * 내부에서 가로 길이 x를 계산하고 
 * (x - 2) * (i - 2) 비교 연산을 수행하는데, 이는 상수 시간 O(1)
 * 
 * 최종 시간복잡도는 O(√(brown + yellow))
 */