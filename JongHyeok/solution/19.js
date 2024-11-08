// 문제 19 문자열 해싱을 이용한 검색 함수 만들기

function stringHash(string){
    const p = 31, m = 1_000_000_007;
    let hashVal = 0;
    for (let i = 0; i < string.length; i++) {
        hashVal = (hashVal * p + string.charCodeAt(i)) % m;
    }
    return hashVal;
}

function solution(stringList, queryList) {
    const hashList = stringList.map((string) => stringHash(string));
    const result = [];
    for(const query of queryList){
        const queryHash = stringHash(query);
        if(hashList.includes(queryHash)) result.push(true);
        else result.push(false);
    }
    return result
}

const stringList = ["apple","banana","cherry"];
const queryList = ["banana","kiwi","melon","apple"];
console.log(solution(stringList, queryList));

/*
권장 시간 복잡도 O(N+K)
---

*/