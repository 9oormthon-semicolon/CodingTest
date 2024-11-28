function solution(numbers) {
    const nums = numbers.split('');
    const set = new Set();
    
    function generateNumbers(arr, str) {
        if (str.length > 0) {
            set.add(Number(str));
        }
        
        if (arr.length === 0) {
            return;
        }
        
        for (let i = 0; i < arr.length; i++) {
            const newArr = [...arr];
            newArr.splice(i, 1);
            generateNumbers(newArr, str + arr[i]);
        }
    }
    
    generateNumbers(nums, '');
    
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    return [...set].filter(isPrime).length;
}

/*
generateNumbers 함수를 사용하여 주어진 숫자들로 만들 수 있는 모든 가능한 숫자 조합을 생성, 이 조합들은 Set에 저장되어 중복을 제거함
isPrime 함수는 주어진 숫자가 소수인지 판별하고 생성된 모든 숫자에 대해 isPrime 함수를 적용하고, 소수인 숫자의 개수를 반환

시간복잡도 - O(n! * √m)
숫자 조합 생성이 가장 큰 영향을 미치며, 각 조합에 대해 소수 판별을 수행하므로 최종 시간복잡도는 O(n! * √m)
*/
