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
//Set 입력 배열은 요소를 한번씩 탐색해야 되므로 O(n)
//배열의 길이 구하는 것은 O(1)
//조건문은 상수시간 O(n)
//가장 많은 시간이 소요되는 부분은 Set객체를 생성하는 부분이라 전체 시간 복잡도는 O(n).
