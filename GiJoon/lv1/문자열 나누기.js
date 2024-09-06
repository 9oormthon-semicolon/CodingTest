function solution(s) {
    //결과 / 카운트 / 현재 값
    let result = 0, cnt = 0 ,cur
    
    for(const char of s){
        if(cnt === 0){
            result++
            cur = char
            cnt++
        }
        else if(cur !== char) cnt --
        else cnt++
    }
    return result
}

// 첫 글자를 읽고 같은 글자가 반복되는 수 만큼
// 다른 문자가 반복하면 그 문자를 분리하는 문제
// 근데 결과는 숫자이기 때문에 따로 분리는 안해도 됨 분리되는 문자 횟수만 세면 된다

// 그래서 저번에 풀었던 "(,")" 문제와 같이 횟수를 숫자에 치환해서 풀었다.
// 초기 값과 같은 값이면 +1 아니면 -1 개수가 같다면 0이 된다
// 0이 되면 나눈 문자열 개수가 추가 되기 때문에 result + 1

//s의 문자열 개수 만큼 반복이기 때문에
//시간복잡도 = O(N)