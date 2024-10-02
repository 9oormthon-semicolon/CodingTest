function solution(array, height) {
    // array에서 height보다 큰 값의 개수를 셈
    return array.filter(el => el > height).length;
}

console.log(solution([149, 180, 192, 170], 167));  // 3
