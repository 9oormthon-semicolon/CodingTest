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