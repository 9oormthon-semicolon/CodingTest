function solution(numbers) {
    const sortedNumbers = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    const answer = sortedNumbers.join('');
    
    // 만약 모든 숫자가 0인 경우 "0"을 반환
    return answer[0] === '0' ? '0' : answer;
}


// 시간 복잡도
//  O(n log n)