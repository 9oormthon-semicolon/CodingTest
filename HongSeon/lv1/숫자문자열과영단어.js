function solution(s) {
    // 영단어 표
    const table = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };
    
    // table을 순회
    for (let key in table) {
        // table의 key값이 주어진 s에 있다면 key 기준으로 split한다
        // ex) one을 만났을 때 ["", "4seveneight"]
        let splitS = s.split(key); 
        
        // 배열이 spilt되었다면 table의 키값에 맞는 value를 가져와
        // 둘 사이에 join한다
        // ex) one을 만났을 때 "" + "1" + "4seveneight"
        s = splitS.join(table[key]);    
    }

    return Number(s);
}

/* 시간복잡도 
     - for (let key in table)
        - 영단어가 10 개이므로 : O(10) 

     - spilt 
        - s 문자열에서 key를 찾고 그 기준으로 문자열을 나누는 작업 : O(n)

     - join 
        - 나누어진 배열을 다시 value로 이어붙이는 작업 : O(n)

    => 전체 시간 복잡도 : O(n)
*/