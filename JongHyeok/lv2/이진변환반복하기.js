function solution(s) {
    let count = 0; // 이진 변환 횟수
    let zeroTotal = 0; // 제거한 0의 개수

    while(s !== "1"){ // 1이 되면 끝
        zeroTotal += (s.match(/0/g) || []).length; // 제거할 0의 개수 세기
        s = s.replace(/0/g, '').length.toString(2); // 0 제거 & 이진 변환
        count ++; // 이진 변환 완료
    }
    return [count, zeroTotal];
}

const s = "110010101001";
console.log(solution(s));

/*
while문을 돌 때마다 문자열의 길이가 절반으로 줄어들기 때문에 O(logN)의 시간복잡도를 가집니다.
match, replace, toString 함수 모두 O(n)의 시간복잡도를 가지기 때문에,
전체 시간복잡도는 O(nlogn)입니다.
*/