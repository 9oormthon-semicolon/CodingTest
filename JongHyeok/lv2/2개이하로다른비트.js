function solution(numbers) {
    return numbers.map(v => {
        // 숫자를 2진수로 변환하여 앞에 0을 붙임
        let str = `0${v.toString(2)}`;
        // 마지막 비트가 0이면 1로 바꿈
        if(str[str.length-1] === '0') str = str.substring(0, str.length-1) + '1';
        // 아니면 '01'을 '10으로 바꿈
        else {
            const idx = str.lastIndexOf('01');
            str = str.substring(0,idx) + '10' + str.substring(idx+2, str.length);
        }
        // 정수 전환
        return parseInt(str, 2);
    })
}

const numbers = [2, 7];
console.log(solution(numbers));

/*
numbers의 길이가 N
이진 변환 및 연산 시간복잡도 logM
전체 시간복잡도 O(N*logM)
*/