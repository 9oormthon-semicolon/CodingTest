// 해새맵 이용
function solution(topping) {
    let result = 0
    let left = new Map()
    let right = new Map()

    // 토핑을 오른쪽에 다 몰아주기
    for (let item of topping) {
        right.set(item, (right.get(item) || 0) + 1)
    }

    // 왼쪽에 하나씩 추가하면서 오른쪽에서 제거
    for (let item of topping) {
        // 왼쪽에 토핑 추가
        left.set(item, (left.get(item) || 0) + 1)

        // 오른쪽에서 토핑 제거
        if (right.get(item) === 1) right.delete(item)
        else right.set(item, right.get(item) - 1)

        // 왼쪽과 오른쪽의 종류 수가 같으면 카운트 증가
        if (left.size === right.size) result++
    }

    return result
}

/* 시간 복잡도 
 - for (let item of topping) : O(n)

 - for (let item of topping) : O(n)

 => 전체 시간 복잡도 : O(n)
*/