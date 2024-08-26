// 초기 배열 길이 절반과 중복 제거 후 배열 길이 비교 후 더 작은 것을 반환 하면 되는 문제

function solution(nums) {
    // 초기 배열 길이 절반
    const beforeArrLen = nums.length / 2
    
    // Set활용해서 중복제거 배열 생성
    const afterArr = [...new Set(nums)]
    
    // 중복 제거한 배열 길이
    const afterArrLen = afterArr.length

    // 삼항 연산자 이용하여 더 작은 값 반환
    return beforeArrLen < afterArrLen ? beforeArrLen : afterArrLen
}

/* 
시간 복잡도 계산

1. const beforeArrLen = nums.length / 2
- 상수 시간 => 시간 복잡도 O(1)

2. const afterArr = [...new Set(nums)]
- 배열 모든 요소 순회하면서 배열을 Set으로 변환 수행 => 시간 복잡도 O(n)
- Set을 다시 배열로 변환 (위와 같이 모든 요소 순회) => 시간 복잡도 O(n)

3. const afterArrLen = afterArr.length
- 상수 시간 => 시간 복잡도 O(1)

4. beforeArrLen < afterArrLen ? beforeArrLen : afterArrLen
- 상수 시간 => 시간 복잡도 O(1)

코드 전체 시간 복잡도 => O(n)
*/