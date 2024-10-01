function solution(numbers){
    // 배열을 내리차순으로 정렬
    numbers.sort((a, b) => b - a);

    // 가장 큰 두 숫자를 곱한 값을 반환
    return numbers[0] * numbers[1];
}
