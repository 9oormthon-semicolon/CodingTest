function solution(my_string) {
    let sum = 0;
    
    //문자열 한글자씩 확인
    for (let char of my_string) {
        //각 문자가 숫자인지 확인하고 숫자라면 그 값을 더함      
        if (!isNaN(char) && char !== ' ') {
            sum += Number(char);  //숫자로 변환해서 더하기    
        }
    }
    return sum;
}
console.log(solution("aAb1B2cC34oOp"));  //출력: 10
console.log(solution("1a2b3c4d123"));  //출력: 16

/*
  function solution(my_string) { 
    // 문자열을 스프레드 연산자(...) 사용해 배열로 변환한 후 reduce로 누적 합을 구함
    // acc-누적값, cur-현재처리중인 문자
    return [...my_string].reduce((acc, cur) => 
        // cur(현재 문자)이 숫자라면 그 값을 acc에 더함, 그렇지 않으면 그대로 acc를 유지
        // +acc와 +cur는 각각 acc와 cur를 숫자로 변환하는 연산
        // acc와 cur이 숫자로 변환된 후 그 값을 더해줌
        Number(cur) ? +acc + +cur : acc
        , 0 // acc의 초기값은 0으로 설정
    );
  }
*/
