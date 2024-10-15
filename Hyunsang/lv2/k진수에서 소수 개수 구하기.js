// // 소수 판별 함수
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // solution 함수
// function solution(n, k) {
//     let a = n.toString(k);  // n을 k진수로 변환
//     let parts = a.split('0');  // '0'을 기준으로 분리
//     let result = 0;

//     // 분리된 숫자들 중 소수 조건을 만족하는 숫자 찾기
//     for (let i = 0; i < parts.length; i++) {
//         let num = Number(parts[i]);
//         if (isPrime(num)) {
//             // 해당 소수의 앞뒤에 '0'이 있는지 체크
//             if (
//                 (i == 0 || a.includes('0' + parts[i])) &&  // 앞에 0이 있거나 없거나
//                 (i == parts.length - 1 || a.includes(parts[i] + '0'))  // 뒤에 0이 있거나 없거나
//             ) {
//                 result++;  // 조건에 맞는 소수 개수 증가
//             }
//         }
//     }

//     return result;  // 최종 소수 개수 반환
// }

// // 소수 판별 함수
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // solution 함수
// function solution(n, k) {
//     let a = n.toString(k);  // n을 k진수로 변환
//     let parts = a.split('0');  // '0'을 기준으로 분리
//     let result = 0;

//     // 분리된 숫자들 중 소수 조건을 만족하는 숫자 찾기
//     for (let i = 0; i < parts.length; i++) {
//         let num = Number(parts[i]);
//         if (isPrime(num)) {
//             // 해당 소수의 앞뒤에 '0'이 있는지 체크
//             if (
//                 (i == 0 || a.includes('0' + parts[i])) &&  // 앞에 0이 있거나 없거나
//                 (i == parts.length - 1 || a.includes(parts[i] + '0'))  // 뒤에 0이 있거나 없거나
//             ) {
//                 result++;  // 조건에 맞는 소수 개수 증가
//             }
//         }
//     }

//     return result;  // 최종 소수 개수 반환
// }
// 소수 판별 함수

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// solution 함수
function solution(n, k) {
    let a = n.toString(k);  // n을 k진수로 변환
    let parts = a.split('0');  // '0'을 기준으로 분리
    let result = 0;

    // 분리된 숫자들 중 소수 조건을 만족하는 숫자 찾기
    for (let i = 0; i < parts.length; i++) {
        let num = Number(parts[i]);
        if (num > 1 && isPrime(num)) {
            result++;  // 소수일 경우 결과 증가
        }
    }

    return result;  // 최종 소수 개수 반환
}

// 다른분들 코드를 보니 0을 기준으로 숫자 분리해서 앞뒤에 0이있는지 확인하는 로직이 
// 필요가 없네요,,,,ㅠ

/**
진수 변환: O(logₖ(n))
split('0'): O(logₖ(n))
루프 내에서 소수 판별: O(√m) (최악의 경우 m ≈ n이므로 O(√n))
각 includes 검사: O(logₖ(n)

최종 시간 복잡도 : O(logₖ(n) * (√n + logₖ(n)))
 */