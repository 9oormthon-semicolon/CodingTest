function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((value, j) => value + arr2[i][j]));
}

/*
같은 행 같은 열에 있는 요소를 더해줍니다.
map을 이중으로 사용했기 때문에 시간복잡도 O(n^2)
*/