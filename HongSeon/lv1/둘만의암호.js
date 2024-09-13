function solution(s, skip, index) {
    let result = ""; 
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    // skip할 문자를 제거한 배열
    const skipAlpha = [...alpha].filter(i => !skip.includes(i))
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        // 현재 문자가 skipAlpha 배열에서의 인덱스 번호를 찾음
        let charIndex = skipAlpha.indexOf(char);
        
        // (현재 문자 index) + index를 더하여 다음 문자로 이동하고 
        // 만약 배열의 크기를 넘으면 배열의 길이를 이용해 순환 시킴
        charIndex = (charIndex + index) % skipAlpha.length;

        result += skipAlpha[charIndex];
    }

    return result;
}

/* 시간 복잡도
 - const skipAlpha = [...alpha].filter(i => !skip.includes(i))
   * skip.includes(i)는 문자열 skip의 길이에 따라 O(k) 시간이 걸립니다 (k는 skip의 길이)
   * 문자열 alpha의 길이는 26
   => O(26 * k) => O(k)
 
 - for (let i = 0; i < s.length; i++) : 문자열 s순회 => O(n)

 - skipAlpha.indexOf(char) : 
   * indexOf는 배열을 선형적으로 검색하기 때문에 O(m)이 걸리지만 skipAlpha의 최대 길이는 26, 
   => O(26) => O(1)

 => 전체 시간 복잡도 : O(n*k)
*/