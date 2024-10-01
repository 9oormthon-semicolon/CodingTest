function solution(phone_book) {
    const hashMap = {}; // 해시맵 생성 {전화번호: true or false}
    for (let phone_number of phone_book) {
        hashMap[phone_number] = true;
    }
    
    for (let phone_number of phone_book) {
        for (let i = 1; i < phone_number.length; i++) {
            const prefix = phone_number.slice(0, i);
            if (hashMap[prefix]) { // 해당 접두어가 전화번호 목록에 있으면
                return false;
            }
        }
    }
    return true;
}

const phone_book = ["119", "97674223", "1195524421"];

console.log(solution(phone_book));

/*
전화번호 목록의 길이에 따라 시간복잡도가 결정됩니다.
전화번호의 길이는 1부터 20이기 때문에 상수로 취급합니다.
접두사를 slice 하는 과정도 slice의 길이만큼(전화번호 길이보다 작음)
의 시간복잡도를 갖기 때문에 상수 취급합니다.
따라서, 전체 시간복잡도는 O(n)입니다.
*/

