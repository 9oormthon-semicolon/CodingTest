function isPrime(num) { // 소수 판별
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const visited = new Set(); // 중복 방문을 방지하기 위한 Set
    const queue = [{ number: "", used: Array(numbers.length).fill(false) }]; // 초기 큐 설정
    const primes = new Set(); // 소수를 저장할 Set

    while (queue.length > 0) {
        const { number, used } = queue.shift(); // 큐에서 하나의 숫자와 사용 여부를 가져옴
        if (number !== "" && !primes.has(Number(number)) && isPrime(Number(number))) {
            primes.add(Number(number)); // 소수라면 primes에 추가
        }
        for (let i = 0; i < numbers.length; i++) {
            if (!used[i]) {
                const newNumber = number + numbers[i]; // 숫자를 추가하여 새로운 숫자 생성
                const newUsed = used.slice(); // 사용 여부 배열 복사
                newUsed[i] = true; // 현재 숫자를 사용했다고 표시
                if (!visited.has(newNumber)) {
                    visited.add(newNumber);
                    queue.push({ number: newNumber, used: newUsed }); // 새로운 숫자와 사용 여부를 큐에 추가
                }
            }
        }
    }
    return primes.size;
}

/*
시간복잡도 O(N!*10^(N/2))
*/