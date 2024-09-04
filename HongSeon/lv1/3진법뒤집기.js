function solution(n) {
    let result = [];
    let sum = 0; 
    
    // 3진수 변환 while문
    // push를 이용하기 때문에 앞뒤 반전을 따로 해줄 필요가 없다
    while (n) {
        result.push(n % 3); 
        n = Math.floor(n / 3); 
    }
    
    // 3의 거듭제곱 값 (1부터 시작, 3^0)
    let count = 0; 
    const arrLen = result.length;
    
    // 배열의 마지막 요소부터 첫 번째 요소까지 반복문 실행
    for (let i = arrLen - 1; i >= 0; i--) {
        // 3의 거듭제곱 갱신(count는 0부터 1씩 증가)
        let x = 3 ** (count); 
        // 배열의 마지막 요소부터 3의 거듭제곱과 곱해 합산
        sum += result[i] * x; 
        count++;
    }
    
    return sum; 
}

/* 시간 복잡도
    - while문(n을 3으로 나눈 몫이 0이 될 때까지 반복) : O(log3n) === O(logn)

    - for문(result 배열의 길이만큼 반복, 배열의 길이는 while 문에서 반복된 횟수와 동일) : O(logn)

    => 전체 시간 복잡도 : O(logn)
*/