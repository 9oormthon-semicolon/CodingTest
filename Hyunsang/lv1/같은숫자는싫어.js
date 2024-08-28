function solution(arr)
{
    let answer = [];
    
    arr.forEach((num, idx) => {
        if (idx === 0 || answer[answer.length-1] !== num) {
            answer.push(num);
        }
    })
    return answer;
}

// answer 배열 생성
// arr 배열을 순회하면서 첫번째 idx는 answer에 삽입
// answer 들어있는 마지막 배열 과 들어갈 숫자를 비교하여 같지 않다면 삽입

// 시간복잡도 :
/*
 1. arr의 for 루프 - 시간복잡도 O(n)
 2. push() 배열의 끝 요소 추가하는 연산 이라 시간복잡도 O(1)
 3. answer[answer.length-1] !== num: answer 배열의 마지막 요소와 num을
     비교하는 연산.  이 연산은 O(1)

     총 시간 복잡도는 O(n)
*/