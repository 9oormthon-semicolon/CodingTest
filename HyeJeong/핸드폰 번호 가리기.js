function solution(phone_number) {
    const clear = '*'.repeat(phone_number.length-4); //맨 뒤 4자리만 남기고 *로 가림
    const phone = phone_number.slice(-4); //*를 제외한 보이는 4자리 번호
    
    return clear + phone;
}

//시간복잡도
//문자열 생성하는 메서드에서 4자리를 제외한 문자열의 길이만큼 반복 -O(n) n은 phone_number 길이
//slice메서드도 O(n)
//O(n)
