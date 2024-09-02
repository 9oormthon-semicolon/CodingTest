function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) { // 커맨드 개수만큼 반복
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]); // i번째부터 j번째 요소까지 배열 자르기
        slicedArray.sort((a, b) => a - b); // 자른 배열 정렬
        answer.push(slicedArray[commands[i][2] - 1]); // 배열의 k번째 수 푸시
    }
    return answer;
}

/*시간복잡도
자바스크립트의 sort 함수는 브라우저마다 알고리즘이 달라진다 합니다.
우리가 vscode에서 코드를 실행할 때 사용하는 NodeJs나 일반적으로 사용하는 Chrome에서는
TimSort를 사용하는데, 짧은 배열에서는 insertion sort를, 비교적 긴 배열에서는 Merge sort를 사용한다 합니다.
insertion sort의 경우 O(n)의 시간복잡도를 가지고, Merge sort의 경우 O(nlogn)의 시간복잡도를 가집니다.
따라서 sort 함수의 시간복잡도는 O(nlogn)입니다.

for 반복문(시간복잡도 > O(n)) 안에 sort 함수(시간복잡도 > O(nlogn))와 slice 함수(시간복잡도(O(n))이 있기 때문에,

전체 시간복잡도는 O(nlogn * n)입니다.*/
