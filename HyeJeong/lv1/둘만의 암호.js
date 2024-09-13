function solution(s, skip, index) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let char of s) { //s 각 문자 반복
        let current = alphabet.indexOf(char); //알파벳 안에 인덱스 찾기
        let count = 0;

        while (count < index) { //index만큼 반복
            current = (current + 1) % 26; //알파벳을 다음으로 이동하기 위한, z다음은 a로 가야함
            if (!skip.includes(alphabet[current])) {
                count++; //문자가 skip에 없으면 count 증가
            }
        }

        result += alphabet[current]; //최종으로 이동하 위치의 문자열 반환
    }

    return result;
}

//시간복잡도
//for루프 - s의 각 원소에 대해서 한번씩 실행 n번 반복
//while - index만큼 실행 m번 반복
//O(n*m)
