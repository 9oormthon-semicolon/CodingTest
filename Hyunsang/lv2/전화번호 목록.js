function solution(phone_book) {
    // 전화번호 목록을 정렬
    phone_book.sort();
    
    // 인접한 전화번호들끼리만 비교하면 됨
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 번호가 다음 번호의 접두사인지를 체크
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}

// 시간복잡도
// O(n log n)