function solution(nums) {
    var answer = new Set(nums);
    // Set객체를 사용해서 포켓몬 종류 파악
    var number = nums.length / 2;
    //포켓몬 개수 파악
    if(number<answer.size){
        return number;
    }
    else{
        return answer.size;
    }
    //포켓몬의 종류가 number보다 크다면 종류가 포켓몬 개수를 초과하기 때문에 number 반환
    //그렇지않다면 포켓몬의 종류를 반환
}
