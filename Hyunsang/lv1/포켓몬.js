function solution(nums) {
    const types = [...new Set(nums)].length; // 고유 포켓몬 종류 수
    const maxSelect = nums.length / 2; // 선택할 수있는 포켓몬 수
    
    //최대 선택 가능한 포켓몬 종류 수 반환
    return types > maxSelect ? maxSelect : types;
}
