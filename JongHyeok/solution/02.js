// 문제 02 배열 제어하기
function solution(arr) {
    return [...new Set(arr)].sort((a, b)=> (b - a));
}

const arr = [4,2,2,1,3,4];
console.log(solution(arr));

/*
권장 시간 복잡도 O(NlogN)
---
스프레드 연산자를 쓰면 세트(집합)을 배열로 변환 가능.
반복문을 통해 일일이 데이터 확인 O(N²) > Set을 통해 데이터 저장 O(N)
메서드 체이닝으로 sort 함수를 사용했기 때문에 전체 시간복잡도는 O(NlogN)
*/