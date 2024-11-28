function solution(numbers) {

    // 숫자의 순열을 생성하는 함수
    const generatePermutations = (array, selectCount) => {
        if (selectCount === 1) return array.map(num => [num]); // 1개를 선택하는 경우 바로 반환
        const result = [];
        array.forEach((current, index, original) => {
            const remaining = [...original.slice(0, index), ...original.slice(index + 1)]; // 현재 요소를 제외한 나머지 배열
            const perms = generatePermutations(remaining, selectCount - 1); // 나머지로 순열 생성
            const combined = perms.map(perm => [current, ...perm]); // 현재 요소를 각 순열에 추가
            result.push(...combined); // 결과에 추가
        });
        return result;
    };

    // 소수인지 확인하는 함수
    const checkPrime = (number) => {
        if (number < 2) return false; // 2보다 작은 경우 소수가 아님
        for (let i = 2; i <= Math.sqrt(number); i++) { // 2부터 √number까지 나눠지는지 확인
            if (number % i === 0) return false; 
        }
        return true;
    };

    const digitsArray = numbers.split(''); // 문자열을 한 글자씩 배열로 변환
    const uniqueCombinations = new Set(); // 중복 제거를 위해 Set 사용

    // 각 길이의 순열을 생성
    for (let length = 1; length <= digitsArray.length; length++) {
        const permutations = generatePermutations(digitsArray, length);
        permutations.forEach(perm => {
            const combinedNumber = parseInt(perm.join(''), 10); // 배열을 숫자로 변환
            uniqueCombinations.add(combinedNumber); // Set에 추가
        });
    }

    let primeCount = 0;
    uniqueCombinations.forEach(num => {
        if (checkPrime(num)) primeCount++; // 소수일 경우 개수 증가
    });

    return primeCount; // 최종 소수 개수 반환
}

// 시간복잡도: O(n! * √(10^n))
