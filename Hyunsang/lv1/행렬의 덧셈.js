function solution(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        // arr1의 각 행 (i 번째 행)을 순회
        for (let j = 0; j < arr1[i].length; j++) {
            // arr1의 각 열 (i 번째 행의 j 번째 열)을 순회
            arr1[i][j] += arr2[i][j];  // arr1[i][j]와 arr2[i][j] 값을 더해서 arr1[i][j]에 저장
        }
    }
    return arr1;  // 합산된 행렬 arr1을 반환
}

/**
 * 시간복잡도:
 * 외부 for 루프는 arr1.length만큼 반복 이 때 arr1은 행렬의 행(row) 수
 * 내부 for 루프는 arr1[i].length만큼 반복되며, 
 * 이는 각 행(row)에 있는 열(column) 수를 의미
 * 각 행과 열의 원소를 전부 순회하며 값을 더하므로, 
 * 총 연산의 횟수는 행(row) 수 × 열(column) 수만큼
 * 시간 복잡도는 행렬의 크기를 n×m이라고 하면, 
 * 시간 복잡도는 O(n * m)
 */