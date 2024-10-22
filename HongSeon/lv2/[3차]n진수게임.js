function solution(n, t, m, p) {
    let result = []
    let binary = ""
    let count = 0

    // 1. t * m 개의 숫자를 n진수로 변환하여 binary 문자열에 누적
    while (count <= t * m) {
        // 현재 숫자 count를 n진수로 변환하여 binary 문자열에 추가
        binary += count.toString(n)
        // 다음 숫자로 이동
        count++
    }

    // 2. 각 참가자의 순서에 맞는 문자를 추출
    for (let i = p - 1; i < t * m; i += m) {
        // p번째 참가자가 말해야 하는 문자를 binary에서 추출후 대문자로 변환
        result.push(binary.split("")[i].toUpperCase())
    }

    // 3. 필요한 t개의 문자만 잘라서 문자열로 반환
    return result.slice(0, t).join("")
}

/* 시간 복잡도
 ** n = t * m

 - while (count <= t * m) [count는 t * m 까지 반복] : O(n) 
    - count.toString(n) [count는 최대 t * m ] O(logn)

 - binary.split("") : O(n) 

 => 전체 시간 복잡도: O(n * logn)
*/