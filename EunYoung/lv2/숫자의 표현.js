// function solution(n) {
//     let count = 0;
//     for(let i = 1; i <= n; i++){
//         let sum = 0;
//         for(let j = i; j <= n; j++){
//             sum += i;
//             if(sum === n){
//                 count++;
//                 break;
//             }
//             if(sum > n){
//                 break;
//             }
//         }
//     }
//     return count;
// }

// 수학적 접근으로 풀어야한다던..
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

// 시간복잡도
// 루프가 n/2번 실행되고, 각 실행마다 상수 시간 연산을 수행합니다.
// 따라서 전체 시간 복잡도는 O(n/2) = O(n) 입니다.
