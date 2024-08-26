function solution(nums) {
    //단순 계산이라 영향없음
    const limit = nums.length/2 
    //배열 => set O(n)의 시간 복잡도
    const list = new Set(nums)
    //삼항 연산이라 영향없음
    return list.size <= limit ? list.size : limit
    //총 O(n)의 시간 복잡도를 가짐
}

// limit보다 포켓몬을 많이 가질 수 없음
// 중복 포켓몬은 가질 수 없기에 set타입 변환으로 중복 제거
// limit(최대 가질 수 있는 포켓몬 마리 수)과 set에 있는 포켓몬 수 를 비교
// 제한된 마리수보다 set에 있는 포켓몬이 많다면 최대 제한 갯수 리턴
// 제한된 마리수 보다 set에 있는 포켓몬이 적다면 set에 있는 포켓몬 마리수 리턴