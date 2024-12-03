function solution(numbers) {
    return numbers.map((x) => {
        if (x % 2 === 0) {
            // 짝수일 경우
            // x가 짝수라면 x + 1은 항상 비트가 1개만 다름
            return x + 1;
        } else {
            // 홀수일 경우
            // 1. x를 2진수 문자열로 변환
            let bit = "0" + x.toString(2); // 앞에 "0" 추가 (마지막 "0"을 찾기 위해 보장)
            
            // 2. 문자열에서 가장 오른쪽의 "0"을 찾음
            let idx = bit.lastIndexOf("0"); // 마지막 "0"의 위치
            
            // 찾은 "0"을 "1"로 바꾸고, 그 뒤의 "1"을 "0"으로 바꿈
            //    (최소한의 비트 변경으로 x보다 큰 숫자를 만들기 위해)
            // bit.slice(0, idx): 마지막 "0" 앞까지의 문자열
            // "10": "0"을 "1"로 바꾸고 그 뒤에 "0" 추가
            // bit.slice(idx + 2): 마지막 "0" 이후 문자열
            return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
            
        }
    });
}

// 시간복잡도: 𝑂(n)