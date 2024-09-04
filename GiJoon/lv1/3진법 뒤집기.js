function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(''),3)
}

//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
//이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

//3진법 변환 -> 배열로 변환 -> 뒤집기 -> join -> 3진법에서 10진법으로 변환
//parseInt의 사용법과 toString()의 사용법만 알면 풀 수 있는 문제 (몰랐음)

//parseInt(1011 , 2) number뒤에 n진수를 10진수로 변환 가능
//toString(2) number을 n진수로 변경가능

// parseInt() 상수
// [...n.toString(3)] O(n)
// reverse O(n)
// join('') 상수
//----------------------------
// 2 * O(n) = O(n)