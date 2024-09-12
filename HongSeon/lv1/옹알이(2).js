function solution(babbling) {
    const bab = ["aya", "ye", "woo", "ma"];
    let count = 0;

    babbling.forEach((word) => {
        for (let b of bab) {
            // 같은 단어가 연속으로 나오면 for문 종료 후 다음 babbling word로 넘기기
            if (word.includes(b + b)) return
            // spilt을 이용해 가능한 발음 제거 후 " "으로 join
            word = word.split(b).join(" "); 
            
        }
        // 위에서 " "로 split을 해줬기 때문에 trim으로 공백을 제거해줘야함
        // word가 ""라면 발음이 가능하기 때문에 count증가
        if (word.trim() === "") count++
    });

    return count;
}

/* 시간 복잡도
 - babbling.forEach() : babbling 배열 순회 => O(n)
 
 - for (let b of bab) : bab의 배열 길이는 4로 고정이므로 => O(1)
 
 -  word.split(b).join(" ") : split과 join은 문자열의 길이만큼 연산이 필요(문자열 길이 = m) => O(m)

 => 전체 시간 복잡도 : O(n*m)
*/