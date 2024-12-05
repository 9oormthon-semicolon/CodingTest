function solution(files) {
    // - (\D+): 숫자가 아닌 문자(head)를 하나 이상 매칭
    // - (\d+): 숫자(number)를 하나 이상 매칭
    // - (.*): 나머지 모든 문자(tail)를 매칭
    // 예: "img12.png"는 ["img12.png", "img", "12", ".png"]로 분리됨
    const splitFiles = files.map(file => file.match(/(\D+)(\d+)(.*)/))
    
    // splitFiles 정렬 
    splitFiles.sort((a, b) => {
        // head는 소문자로 변경
        const headA = a[1].toLowerCase()
        const headB = b[1].toLowerCase()
        // number은 정수로 변경
        const numberA = parseInt(a[2], 10)
        const numberB = parseInt(b[2], 10)

        // 1. HEAD를 먼저 비교
        // HEAD가 사전 순서로 더 앞서면 a가 b보다 앞에 와야 하므로 -1 반환
        // HEAD가 사전 순서로 더 뒤에 있으면 a가 b보다 뒤에 와야 하므로 1 반환
        if (headA < headB) return -1
        if (headA > headB) return 1

        // 2. HEAD가 동일하면 NUMBER를 비교
        // NUMBER가 더 작으면 a가 b보다 앞에 와야 하므로 음수 반환
        // NUMBER가 더 크면 a가 b보다 뒤에 와야 하므로 양수 반환
        return numberA - numberB
    })
    
    // 분리된 파일 이름을 다시 합쳐서 반환
    return splitFiles.map(parts => parts.slice(1).join(''))
}

/* 시간 복잡도
 ** n: 파일 개수, m: 평균 파일 이름 길이
 
 - files.map(file => file.match(...)) : O(n * m)
    - 정규식 match는 파일 이름 길이(m)에 비례
    - 파일 개수(n)만큼 반복

 - splitFiles.sort((a, b) => ...) : O(nlogn * m)
    - 기본 정렬은 O(nlogn)
    - 비교 연산에서 HEAD의 toLowerCase 및 NUMBER의 parseInt 처리로 평균 파일 길이(m)에 비례한 추가 비용 발생

 - splitFiles.map(parts => parts.slice(...)) : O(n * m)
    - 분리된 배열을 다시 합칠 때 파일 개수(n)와 평균 이름 길이(m)에 비례

 => 전체 시간 복잡도 : O((n * m) + (nlogn * m) + (n * m)) = O(n * logn * m)
*/
