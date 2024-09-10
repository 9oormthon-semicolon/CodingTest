function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/* 시간복잡도 
 - "*".repeat(phone_number.length - 4) : O(n)
 
 - phone_number.slice(-4) : O(1)

 => 전체 시간 복잡도 : O(n)
*/