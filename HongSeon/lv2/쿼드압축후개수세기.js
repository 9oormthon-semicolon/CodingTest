// dfs 이용
const quad = (arr) => {
    // 현재 배열 크기
    const Len = arr.length
    // 배열을 4등분 할 때 사용할 중간 위치           
    const half = Math.floor(Len / 2)
    // 1차원 배열로 펼처서 모든 요소의 합 계산
    const total = arr.flat().reduce((sum, val) => sum + val, 0)

    // 배열의 크기가 1일 경우, 더 이상 나눌 수 없으므로 해당 요소 반환
    if (Len === 1) return [arr[0][0]]
    // 모든 요소가 1일 경우 [1]로 압축 
    else if (total === Len ** 2) return [1]
    // 모든 요소가 0일 경우 [0]로 압축 
    else if (total === 0) return [0]

    // 배열을 4개로 나누기
    // 왼쪽 위
    const arr1 = arr.slice(0, half).map(row => row.slice(0, half))
    // 오른쪽 위 
    const arr2 = arr.slice(0, half).map(row => row.slice(half))   
    // 왼쪽 아래  
    const arr3 = arr.slice(half).map(row => row.slice(0, half))   
     // 오른쪽 아래  
    const arr4 = arr.slice(half).map(row => row.slice(half))       

    // 나눈 배열을 재귀 호출하고 결과를 합쳐서 반환
    return quad(arr1).concat(quad(arr2), quad(arr3), quad(arr4))
}

function solution(arr) {
    const result = quad(arr) 
    // 반환된 배열에서 1과 0의 개수를 세어 반환
    return [result.filter(v => v === 0).length, result.filter(v => v === 1).length]  
}

/* 시간 복잡도  
 ** n은 현재 배열 arr의 한 변의 길이 (arr.length) 
 ** 배열의 총 크기 = n x n

 - quad() [배열의 크기가 같지 않거나 값이 다를 때마다 4개의 작은 배열로 분할하고, 각 작은 배열에 대해 재귀 호출] : O(logn)
    - arr.flat().reduce() [모든 요소 합을 계산] : O(n^2)

 => 전체 시간 복잡도: O(n^2 * logn)
    * 최악의 경우 모든 값이 다르고, 배열을 최대 깊이까지 나누는 경우
*/
