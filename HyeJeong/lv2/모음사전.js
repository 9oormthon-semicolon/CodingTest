function solution(word) {
    let answer = 0; //결과값을 저장할 변수
    const vowels = 'AEIOU'; //모음을 순서대로 저장한 문자열
    const weights = [781, 156, 31, 6, 1]; //각 자리수별 가중치를 저장한 배열
    
    for (let i = 0; i < word.length; i++) {
        answer += vowels.indexOf(word[i]) * weights[i] + 1;
    }
    
    return answer;
}

/*
주어진 단어의 각 문자에 대해 반복
vowels.indexOf(word[i]) - 현재 문자가 모음 중 몇 번째인지 찾음
weights[i] - 현재 자리수의 가중치
위 두 값을 곱하고 1을 더해 answer에 누적
계산된 answer 값을 반환

시간복잡도 - O(n)
단어의 길이가 n일 때, 루프는 n번 실행
*/
