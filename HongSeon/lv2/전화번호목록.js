function solution(phone_book) {
    // 해시테이블 구성
    let hash = new Map()
    phone_book.map((item, idx) => {
        hash.set(item, idx)
    })
    
    // phone_book 순회
    for(let i = 0; i < phone_book.length; i++){
        // 전화번호 추출
        let temp = phone_book[i]
        for(let j = 0; j < temp.length; j++) {
            // 추출한 전화번호를 slice하여 해시테이블에 존재하는지 확인
            // 단, 추출한 전화번호의 마지막 번호는 빼고 slice
            // 마지막 번호까지 가버리면 has메서드는 무조건 true를 뱉음
            if(hash.has(temp.slice(0, j))) return false
        }
    }
    
    return true
}

/* 시간 복잡도
 - phone_book.map[phone_book 순회] : O(n)

 - for(let i = 0; i < phone_book.length; i++)[phone_book 순회] : O(n)
    - for(let j = 0; j < temp.length; j++)[temp순회] : O(m)
        - temp.slice(0, j))[slice 메서드, temp 순회] : O(m)

=> 전체 시간 복잡도: O(n * m^2)
   - n: phone_book.length
   - m: temp.length
*/



// 실패한 코드 : 정확성 테스트(1,5,8,9,13,14,19), 효율 테스트(3,4) 통과 못함
// function solution(phone_book) {
//     let hash = new Map()
    
//     for(let i = 0; i < phone_book.length; i++){
//         hash.set(i, phone_book[i])
//     }
    
//     for(let i = 0; i < phone_book.length; i++){
//         for(let j = i + 1; j < phone_book.length; j++){
//                 if(hash.get(j).includes(hash.get(i)) === true){
//                     return false
//             }
//         }
//     }
    
//     return true
// }