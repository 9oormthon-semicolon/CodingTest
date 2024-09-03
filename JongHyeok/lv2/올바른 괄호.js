// 프로그래머스 lv2 올바른 괄호
function solution(s){
    let sum = 0;
    const arr = [...s]; // 전개 연산자들 활용해 문자열을 배열로
    try { // forEach 함수를 위해 try-catch문을 사용했지만 일반적인 배열로도 구현 가능합니다.
        arr.forEach(function(element){
            sum += element === '('? 1: -1;
            if(sum < 0) {
                throw new Error();
                // 처음이나 중간에 )의 개수가 더 많아질 때
            }
        });
    } catch(error) {
        return false;
    }
    return sum === 0? true: false; // (와 )의 개수가 같으면 통과
}

const s = ")()(";
console.log(solution(s));

/* 설명:
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열리면 ')'로 닫힌다는 것을 의미합니다.
문자열에서 차례대로 문자를 빼내는(순회하는) 과정에서
'('의 개수가 많아질 수는 있지만,
예) "(())()" 라는 문자열에서 3번쨰 요소까지의 순회 => "(()""
')'의 개수가 더 많을 수는 없습니다.
예) ')'로 시작하면 처음부터 ')'의 개수 1, '('의 개수가 0이기에 조건에 맞지 않음
    "())(()" 라는 문자열에서 3번째 요소까지의 순회 => "())"로 2번째 ')' 때문에 정상적인 괄호가 생성되지 않습니다.
따라서 순회하는 과정에서 ')'의 개수가 많아지면 그 즉시 순회를 종료하고 false를 반환하며
'('의 개수가 많거나 ')'의 개수와 같은 상태면 순회가 끝납니다.
개수가 같다면 모든 괄호가 정상적으로 열리고 닫혔다는 뜻이며 true를 반환하고,
개수가 다르다면 '('의 개수가 많다는 의미이며 괄호가 열린 상태의 문자가 포함된다는 뜻이며 false를 반환합니다.
forEach 사용 > 시간복잡도: O(n)*/

/* for, forEach, filter, map. reduce 반복문 모두 시간복잡도 O(n)
for: 빠르고 단순, continue, break 사용 가능, 모든 자료형에 대해 사용 가능
forEach: 가독성이 좋음, return 불가
filter: boolean 형태의 return 값을 가짐, chainable(옵셔널 체이닝 가능)
map: 새로운 값을 return, chainable
reduce: 첫번째 인자 accumulator (return 값 누적)
*/

