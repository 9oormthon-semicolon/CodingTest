function solution(s) {
    let dictionary = {
        'zero' : '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9'
    };
    
    for ( let [ word, num ] of Object.entries(dictionary) ) {
        // 모든 일치 항목을 치환하기 위해 정규표현식 사용
         s = s.replace(new RegExp(word, 'g'), num);
        // RegExp(찾고하자는 패턴, 플래그)
    }
    
    return Number(s)
}

/* 
시간 복잡도: 
Object.entries(dictionary) O(1)
replace()는 문자열을 한 번 순회하며 해당 패턴을 찾아 치환 O(n)
딕셔너리에는 10개의 숫자에 대한 항목이 있으므로, 최대 10번의 replace() 호출이 발생
 각 호출이 O(n)이고, 이를 최대 10번 반복하므로 
 전체 시간 복잡도는 10 * O(n)입니다.
하지만 10은 상수이므로, 전체 시간 복잡도는 **O(n)
*/