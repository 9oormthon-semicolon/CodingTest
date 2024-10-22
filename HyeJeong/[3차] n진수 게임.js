function solution(n, t, m, p) {
    let answer = '';
    let numbers = '';
    let i = 0;
    
    while (numbers.length < t * m) {
        numbers += i.toString(n).toUpperCase();
        i++;
    }
    
    for (let j = p - 1; j < t * m; j += m) {
        answer += numbers[j];
    }
    
    return answer.slice(0, t);
}

/*
먼저 0부터 시작하여 n진수로 변환한 숫자들을 numbers 문자열에 연결
i.toString(n)을 사용하여 i를 n진수로 변환
toUpperCase()를 사용하여 10~15를 A~F로 변환
튜브의 순서에 맞는 숫자 추출하기 위해 p-1부터 시작하여 m씩 증가하면서 numbers에서 해당 인덱스의 문자를 answer에 추가
answer.slice(0, t)를 사용하여 필요한 길이(t)만큼만 잘라서 반환

시간복잡도 - O(t*m)
while 루프에서 str.length <= t*m까지 반복
각 반복에서 숫자를 n진수로 변환하고 문자열에 추가
*/
