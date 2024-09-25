const cal = (num, arr, hash) => {
    // 4점일 경우 함수 종료
    if(num === 4) return
    // 4점 미만 일때 첫 번째 타입의 점수 증가
    // num: 1, 2, 3 => score: 3, 2, 1
    else if(num < 4){
        hash.set(arr[0], hash.get(arr[0]) + (4 - num))
    }
    // 4점 초과 일때 두 번째 타입의 점수 증가
    // num: 5, 6, 7 => score: 1, 2, 3
    else{
        hash.set(arr[1], hash.get(arr[1]) + (num - 4))
    }
}

function solution(survey, choices) {
    let result = "";
    // 해시테이블 이용
    let hash = new Map([
    ["R", 0],
    ["T", 0],
    ["C", 0],
    ["F", 0],
    ["J", 0],
    ["M", 0],
    ["A", 0],
    ["N", 0]
]);
    
    for(let i = 0; i < survey.length; i++){
        cal(choices[i], survey[i].split(""), hash)
    }
    
    // 각 유형 비교 후 result에 추가
    // 둘다 0점일 시 앞에 있는 유형을 추가
    result += (hash.get("R") >= hash.get("T")) ? "R" : "T";
    result += (hash.get("C") >= hash.get("F")) ? "C" : "F";
    result += (hash.get("J") >= hash.get("M")) ? "J" : "M";
    result += (hash.get("A") >= hash.get("N")) ? "A" : "N";
    
    return result
}

/* 시간 복잡도
 - cal함수 : get, set은 상수시간 : O(1)

 - for(let i = 0; i < survey.length; i++) : survey길이만큼 반복 => O(n)

 => 전체 시간 복잡도 : O(n)

 ** 단순하게 생각해서 노가다 문제처럼 느껴졌음
*/