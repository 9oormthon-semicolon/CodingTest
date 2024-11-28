// 완전탐색 + DFS 이용
function solution(numbers) {
    // 숫자를 각 자릿수로 나눔
    let list = numbers.split('') 
    let result = 0 
    // 중복된 숫자 확인용
    let check = new Set() 
    // 각 자릿수 사용 여부
    let useCheck = new Array(list.length).fill(false) 

    // 소수 판별 함수
    const isPrime = (n) => {
        if (n === 0 || n === 1) return false 
        if (n === 2) return true 
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) if (n % i === 0) return false 

        return true 
    }

    // 완전 탐색 + DFS
    // 재귀 종료 조건: 모든 자릿수를 확인한 경우
    const bruteforce = (num, idx) => {
        if (idx === list.length) {
            // 빈 문자열은 처리 x
            if (num === '') return 
            // 문자열을 숫자로 변환
            let number = parseInt(num)
            // 이미 확인한 숫자인지 체크 
            if (!check.has(number)) { 
                check.add(number) // 새로운 숫자를 추가
                // 소수라면  소수 개수 증가
                if (isPrime(number)) result++ 
            }
            return
        }

        // DFS 시작
        for (let index = 0; index < list.length; index++) {
             // 이미 사용한 숫자는 스킵
            if (useCheck[index]) continue

            // 현재 숫자를 사용하지 않는 경우
            bruteforce('', idx + 1)
            // 현재 숫자를 사용 표시 
            useCheck[index] = true 

            // 현재 숫자를 추가한 경우
            bruteforce(num + list[index], idx + 1)
            // 사용 표시 초기화 
            useCheck[index] = false 
        }
    }

    bruteforce('', 0)

    return result 
}

/* 시간 복잡도 
 - const isPrime : O(sqrt(x)) 
   (x는 판별하려는 숫자, 최대 값은 10^n)

 - const bruteforce : O(n!) 
   (n은 numbers의 자릿수, 모든 순열 생성)

 => 전체 시간 복잡도 : O(n!*sqrt(x)) ≈ O(n! × 10^(n/2))
*/
