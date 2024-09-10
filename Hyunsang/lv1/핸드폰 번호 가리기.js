function solution(phone_number) {
    let phoneArr = [...phone_number]; // 배열로 바꾸어 저장
    
    for( let i = 0 ; i < phoneArr.length - 4 ; i ++) {
        phoneArr[i] = '*'; // 끝 네자리 빼고 다 별로 변경
    }
    
    return phoneArr.join('') // 문자열로 바꾸어 리턴.
}
/*
시간복잡도 :
O(n) (배열로 변환)
O(n) (반복문)
O(n) (문자열로 합치기)
최종 시간 복잡도는 O(n)
*/