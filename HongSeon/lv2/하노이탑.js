// 스택을 이용
const hanoiStack = (n, start, end, result) => {
    // 스택
    const stack = []
    // 첫 작업을 스택에 추가 (아직 이동되지 않은 상태)
    stack.push([n, start, end, false])

    // 스택이 빌 때까지 반복
    while (stack.length > 0) {
        // 가장 최근 작업을 꺼냄
        const [n, start, end, isMove] = stack.pop()
        // 남은 기둥 계산 (1 + 2 + 3 = 6)
        const tmp = 6 - start - end

        // true일 때 원반을 start에서 end로 이동 기록
        if (isMove) result.push([start, end])
        
        // 스택을 이용하므로 거꾸로 진행한다고 보면 됨
        else if (n > 0) {
            // 3. n-1개의 원반을 중간 기둥(tmp)에서 목표 기둥(end)으로 이동
            stack.push([n - 1, tmp, end, false])
            // 2. n번째 원반을 시작 기둥(start)에서 목표 기둥(end)으로 이동
            stack.push([n, start, end, true])
            // 1. n-1개의 원반을 시작 기둥(start)에서 중간 기둥(tmp)으로 이동
            stack.push([n - 1, start, tmp, false])
        }
    }
}

function solution(n) {
    const result = []
    hanoiStack(n, 1, 3, result)
    return result
}

/* 시간복잡도
 - 하노이 탑 문제는 원반을 한 기둥에서 다른 기둥으로 이동하는 재귀적 문제 
 - 원반이 n개일 때, 최종 목표를 달성하려면 하위 문제 두 개(n-1개의 원반 이동)를 해결해야 하므로, 재귀적으로 두 개의 하위 문제로 분할
 - 시간 복잡도는 다음과 같은 재귀 관계로 표현
    T(n)= 2T(n−1) + 1
    
    2T(n-1): 두 하위 문제(n-1개의 원반 이동) 수행
    +1: 마지막 원반을 목표 기둥으로 이동

    위 관계식을 풀면 T(n) = 2^n - 1

    하노이 탑 문제의 시간 복잡도는 O(2^n)
    스택을 이용한 것도 시간 복잡도는 동일
*/

// 학부 수업 때 재귀로 풀지 말고 스택으로 푸는게 과제여서 그 때 푼것을 이용해 js로 풀었습니다.
// 근데 다시 보니 이해가 오래 걸리네요... 