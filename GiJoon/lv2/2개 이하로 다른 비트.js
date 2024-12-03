function solution(numbers) {
    return numbers.map(n => {
        if (n % 2 === 0) return n + 1;

        let binary = n.toString(2);

        if (!binary.includes('0')) return parseInt("10" + binary.slice(1), 2);
        
        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === "0") return parseInt(binary.slice(0, i) + "10" + binary.slice(i + 2), 2);
        }
    });
}

/*
    비트로 연산하는 법을 몰라서 slice로 해결했습니다. 
    
    짝수면 +1 1100 + 1 => 1101

    모든수가 1111이면 10 + 111 => 10111 
    중간에 0이 있다면 11011 11 + 10 + 1 => 11101
    
    O(N.toString(2).length)
    
    
*/