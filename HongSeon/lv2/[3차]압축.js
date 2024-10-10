// LZW 알고리즘 이용 문제 
function solution(msg) {
    let result = []
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // 해시맵 생성
    let alphaMap = new Map()
    // 임시 글자
    let tempChar = ""
    // 26개의 글자 이후 인덱스
    let idx = alpha.length + 1
    
    // 해시맵 초기화
    alpha.split("").forEach((v, i) => {
        alphaMap.set(v, i + 1)
    })
    
    for(let i = 0; i < msg.length; i++){
        // 현재 글자
        let char = msg[i]
        // 단어 = 임시 글자 + 현재 글자
        let word = tempChar + char
        
        // 완성된 단어(글자)가 이미 저장된 해시맵에 존재한다면
        // 임시 글자 = 현재 글자
        if(alphaMap.has(word)) tempChar = word
        // 새로운 단어 발견
        else{
            // 임시 글자는 이미 해시맵에 존재하므로 result에 추가
            result.push(alphaMap.get(tempChar))
            // 새로운 단어 인덱스와 함께 해시맵에 저장
            alphaMap.set(word, idx)
            // 인덱스 증가
            idx++
            // 임시 글자 = 현재 글자
            tempChar = char
        }
    }
    
    // for문이 종료되고 마지막 남은 글자 처리
    if(tempChar !== "") result.push(alphaMap.get(tempChar))
    
    return result
}

/* 시간복잡도 
 - alpha.split("").forEach((v, i) [최대 26 반복이므로 상수시간] : O(1)

 - for(let i = 0; i < msg.length; i++) [msg 배열 순회] : O(n)

 => 전체 시간 복잡도 : O(n)
*/