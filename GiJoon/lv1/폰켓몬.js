function solution(nums) {
    const limit = nums.length/2
    const list = new Set(nums)
    return list.size <= limit ? list.size : limit
}
// 포켓몬 최대 nums.length/2 가잘 수 있으나 같은 타입 중복 불가능
// limit보다 포켓몬을 많이 가질 수 없음
// limit과 list.size(최대 가질 수 있는 포켓몬 마리 수)를 비교
// limit보다 list.size가 작으면 list.size리턴 limit 이상이면 limit 리턴