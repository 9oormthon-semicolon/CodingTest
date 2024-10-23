function solution(p) {
    let u = ""
    let v = ""
    let left = 0
    let right = 0
    let count = 0
    
    // 빈 문자열이면 그대로 반환
    if (p === "") return ""

    // 문자열을 균형잡힌 두 부분으로 나누는 과정
    for (let i = 0; i < p.length; i++) {
        p[i] === '(' ? left++ : right++
        // '('와 ')'의 개수가 같아지면 그 부분까지가 균형잡힌 문자열 u가 됨
        if (left === right) {
            // 균형잡힌 문자열 u
            u = p.slice(0, i + 1) 
            // 나머지 문자열 v
            v = p.slice(i + 1)   
            break
        }
    }
    
    // u가 올바른 괄호 문자열인지 확인하는 변수
    let isOK = true
    // u가 올바른 괄호 문자열인지 확인하는 과정
    for (let i = 0; i < u.length; i++) {
        u[i] === "(" ? count++ : count--
        // 음수가 되면 올바르지 않은 문자열
        if (count < 0) {
            isOK = false
            break
        }
    }

    // u가 올바른 괄호 문자열이면 나머지 문자열 v에 대해 재귀 호출
    if (isOK) return u + solution(v)
    // u가 올바르지 않은 경우
    else {
        // 새로운 문자열을 시작하는 '(' 추가
        let newString = '('
        // 나머지 문자열 v를 재귀적으로 처리한 결과를 추가
        newString += solution(v)
        // 재귀 호출 후 올바른 괄호를 만들기 위해 마지막에 ')' 추가
        newString += ')'

        // u의 첫 번째와 마지막 문자를 제외한 나머지 부분을 뒤집는 과정
        for (let i = 1; i < u.length - 1; i++) {
            u[i] === "(" ? newString += ")" : newString += "("
        }
        
        return newString
    }
}

/* 시간 복잡도 
 - for (let i = 0; i < p.length; i++) : O(n)

 - for (let i = 0; i < u.length; i++) : O(n)

 - u + solution(v) [재귀 호출] : O(n^2)

 - for (let i = 1; i < u.length - 1; i++) : O(n)

 => 전체 시간 복잡도 : O(n^2)
*/