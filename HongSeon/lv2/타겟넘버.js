// BFS이용
function solution(numbers, target) {
    // 루트 노드
    let leaves = [0]
    
    for (let num of numbers) {
        let temp = []
        // 현재 노드에서 나올 수 있는 두 가지 경우의 수를 모두 고려
        // leaf에 num을 더한 값과 뺀 값을 temp 배열에 추가
        for (let leaf of leaves) {
            temp.push(leaf + num)
            temp.push(leaf - num)
        }
        // 다음 단계
        leaves = temp
    }

    // leaves 배열에서 target 값과 일치하는 값의 개수를 반환
    return leaves.filter(leaf => leaf === target).length
}

/* 시간복잡도
 - 2중 for문 : O(n^2)

 => 전체 시간 복잡도 : O(n^2)
*/