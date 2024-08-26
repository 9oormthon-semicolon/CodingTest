function solution(nums) {
    var answer = new Set(nums);
    var number = nums.length / 2;
    if(number<answer.size){
        return number;
    }
    else{
        return answer.size;
    }
}
