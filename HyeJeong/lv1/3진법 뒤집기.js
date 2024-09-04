function solution(n) {
    let three = ''; //3진법으로 변환된 결과를 저장하기 위한 빈 문자열
    while(n>0){
        three=(n%3) + three; //현재 숫자를 3으로 나눈 나머지를 구함->나머지를 문자열 앞에 추가
        n=Math.floor(n/3); //현재 숫자를 3으로 나눈 몫을 대입하여 n값 업데이트->몫의 값이 다음 반복에서 사용됨
    }
    return parseInt(three.toString().split('').reverse().join(''),3);  //숫자를 문자열로 변환하고 문자열을 각 문자로 나누어 배열로 만들고 배열의 요소를 뒤집은 다음 배열의 요소를 다시 문자열로 합친 후 다시 10진법으로 변환
}

//시간복잡도
//while루프 - O(m) m은 문자열의 길이
//문자열 처리 - split, reverse, join, pareInt 모두 O(m)
//총 시간 복잡도 
//반복과 문자열 처리 과정에서 문자열의 최대 길이는 log3(n)이기 때문에 시간복잡도가 O(log(n))이 됨
//O(log(n) * O(log(n))= O(log²(n))
