function solution(nums) {
    const types = [...new Set(nums)].length; // 고유 포켓몬 종류 수
    const maxSelect = nums.length / 2; // 선택할 수있는 포켓몬 수
    
    //최대 선택 가능한 포켓몬 종류 수 반환
    return types > maxSelect ? maxSelect : types;

    //  함수는 주어진 'nums' 배열에서 고유한 포켓몬 종류의 수를 계산하고
    // 선택할 수 있는 포켓몬의 최대 수는 전체 포켓몬 수의 절반이다.
    //  고유한 포켓몬 종류 수와 선택 가능한 포켓몬 수를 비교하여, 더 작은 값을 반환.

    // 시간 복잡도
    // N은 'nums' 배열의 길이.
    // Set을 생성하여 고유한 값을 찾는 과정이 O(N)의 시간 복잡도를 가지며, 
    // 배열의 길이를 구하고 비교하는 작업도 O(N)입니다.
    // 결론적으로 시간복잡도는 O(N).
}
