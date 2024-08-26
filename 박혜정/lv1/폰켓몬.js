function solution(nums) {
  //Set객체를 사용해서 폰켓몬의 종류를 파악함
    var answer = new Set(nums);
    var number = nums.length / 2;
  //폰켓몬의 종류가 number보다 크다면 폰켓몬의 개수보다 크기 때문에 number를 반환 
    if(number<answer.size){
        return number;
    }
  //그렇지 않다면 폰켓몬의 종류를 반환
    else{
        return answer.size;
    }
}
