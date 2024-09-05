let dictionary = {
    "zero":"0",
    "one":"1",
    "two":"2",
    "three":"3",
    "four":"4",
    "five":"5",
    "six":"6",
    "seven":"7",
    "eight":"8",
    "nine":"9",
};

function solution(s) {
    for (let key in dictionary) {
        s = s.replaceAll(key, dictionary[key]);  // replaceAll을 사용해 영단어를 숫자로 대체
    }
    return Number(s);
}

console.log(solution("one4seveneight"));

/*
Object를 이용해 딕셔너리를 구현합니다.
딕셔너리를 순화하 key값을 value로 대체합니다.
딕셔너리의 크기가 10이며 딕셔너리를 순화하며 replaceAll을 합니다.
replaceAll은 시간복잡도가 O(n)이기 때문에, O(10 * n)의 시간복잡도를 갖습니다.
10은 상수이기 때문에 전체 코드의 시간복잡도는 O(n)입니다.

replaceAll 대신 정규표현식 사용할 수 있음.

s = s.replaceAll(key, dictionary[key]); 
=>
s = s.replace(new RegExp(key, 'g'), dictionary[key]);

'g' 전체문자열 탐색 > key값이 있으면 replace > value 값으로
정규표현식 사용할 때도 마찬가지로 시간복잡도 O(n)
*/