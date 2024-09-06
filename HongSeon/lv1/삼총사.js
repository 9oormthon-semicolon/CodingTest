// number의 길이가 13까지니까 하드코딩식으로 진행해도 되겠다
function solution(number) {
    let arrLen = number.length
    let sum = 0;
    
    // 세 명의 합이 0이 되는 조합
    // 최적화를 위해서는 i는 굳이 배열 끝까지 순회할 이유가 없음
    // 마지막 2개의 요소를 남겨줘야 i가 증가해도 j,k가 배열길이 범위안에 있음
    // 마찬가지로 j는 마지막 1개의 요소를 남기고 순회하면 됨
    for(let i = 0; i < arrLen - 2; i++){
        for(let j = i + 1; j < arrLen - 1; j++){
            for(let k = j+1 ; k < arrLen; k++){
                if(number[i] + number[j] + number[k] === 0) sum += 1;
            }
        }
    }
    
    return sum
}

/* 시간 복잡도
    - 3개의 for문
    - for문 하나당 시간복잡도는 : O(n)

    => 전체 시간 복잡도 : O(n^3)

    n = 13인 경우, 최대 약 286개의 조합을 검사하게 되므로, 
    시간 복잡도가 O(n^3)인 알고리즘이라도 13 정도의 길이를 가진 배열에 대해서는 성능이 충분히 괜찮다.
*/