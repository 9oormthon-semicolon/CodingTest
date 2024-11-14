function solution(topping) {
    const right = new Map()
    const left = new Map()
    // right 에 토핑이 몇 번 나왔는지 확인
    for (const t of topping) {
        if (right.get(t)) right.set(t , right.get(t)+1)
        else right.set(t,1)
    }
 
    let count = 0
    // 왼쪽 오른쪽 비교 
    for (const t of topping) {
        // 오른쪽 토핑 제거
        if (right.get(t)>1) right.set(t, right.get(t)-1)
        else right.delete(t)
        // 왼쪽 토핑 추가
        if (left.get(t)) left.set(t , left.get(t)+1)
        else left.set(t,1)
        
        if (left.size === right.size) count++
    }
    return count
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));

/*
topping 배열을 순회하며
토핑의 등장 횟수를 확인하고 O(N)
비교하기 때문에 O(N)
시간복잡도 O(N)
*/
