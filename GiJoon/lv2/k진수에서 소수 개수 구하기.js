function isPrime(str) {
    const num = Number(str)
    
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    
    return true
}


const solution = (n, k) => n.toString(k).split('0').filter(v => isPrime(v)).length


/*
    양의 정수 n -> k진수
    
    0P0
    P0
    0P
    P
    
    조합을 만들어서 하려했으나 소수판별하고 다시 문자열로 바꿔야해서 다른 방법으로 틀었습니다.
    
    문제를 다시 읽어 보니 0 사이에 있는 값이 소수인 개수만 세면 되는 간단한 문제였네용
    ex) 211 /0/ 2 /0/ 1 /0/ 1 /0/ 11
    0을 기준으로 나누게 되면 0P0 P0 0P P를 다 만족하기 떄문에 split으로 나누고 소수 판별 함수를 만들어서 풀었습니다.
    
    진수변환 -> O(log n)
    문자열 분리 -> O(log n)
    소수판별 -> O(√n)
    
    O(log n * √n)
    
*/