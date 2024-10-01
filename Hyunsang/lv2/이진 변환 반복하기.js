function solution(s) {
    let conversionCount = 0;  // 이진 변환 횟수를 저장할 변수
    let removeZeroCnt = 0;    // 제거된 '0'의 총 개수를 저장할 변수

    // 문자열이 '1'이 될 때까지 반복
    while (s !== '1') {
        conversionCount++;  // 변환 횟수 증가

        // 문자열에서 제거할 '0'의 개수를 계산
        let zeroRemove = s.split('0').length - 1;
        removeZeroCnt += zeroRemove;  // 제거된 '0'의 총 개수에 추가

        // '0'을 모두 제거한 후, 남은 문자열의 길이를 계산 (1만 남은 문자열)
        let binary = s.replace(/0/g, '').length;
        
        // 남은 문자열의 길이를 2진수로 변환하여 다시 문자열로 저장
        s = binary.toString(2);
    }

    // 변환 횟수와 제거된 '0'의 총 개수를 배열로 반환
    return [conversionCount, removeZeroCnt];
}

// 시간 복잡도:
// O(log n)