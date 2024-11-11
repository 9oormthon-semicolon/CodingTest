function solution(storey) {
    let presses = 0;
    
    while (storey > 0) {
        const currentDigit = storey % 10;
        const nextDigit = Math.floor((storey % 100) / 10);

        if (currentDigit < 5 || (currentDigit === 5 && nextDigit < 5)) {
            presses += currentDigit;
        } else {
            presses += (10 - currentDigit);
            storey += 10;
        }
        
        storey = Math.floor(storey / 10);
    }
    
    return presses;
}

const storey = 16;

console.log(solution(storey));

// 절대값이 10^c인 정수들이 적힌 버튼
// -1 1 -10 10 -100 100
// 버튼을 누르면 현재 층에 해당값을 더해서
// 더한 게 음수면 이동하지 않음.
// 