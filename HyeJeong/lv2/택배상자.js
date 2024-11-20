function solution(order) {
    let answer = 0; //트럭에 실은 상자의 수를 추적
    let stack = []; //보조 컨테이너 벨트 역할
    let currentBox = 1; // 현재 처리 중인 상자 번호

    for (let i = 0; i < order.length; i++) {
        while (currentBox < order[i]) {
            stack.push(currentBox);
            currentBox++;
        }

        if (currentBox === order[i]) {
            answer++;
            currentBox++;
        } else if (stack.length > 0 && stack[stack.length - 1] === order[i]) {
            stack.pop();
            answer++;
        } else {
            break;
        }
    }

    return answer;
}

/*
order 배열을 순회하면서 각 상자를 처리
현재 상자 번호가 필요한 상자 번호보다 작으면, 보조 컨테이너에 넣음
현재 상자가 필요한 상자와 일치하면, 트럭에 실고 answer를 증가시킴
보조 컨테이너의 맨 위 상자가 필요한 상자와 일치하면, 그 상자를 트럭에 싣고 answer 증가
위 조건들에 해당하지 않으면, 더 이상 상자를 실을 수 없으므로 반복을 중단

시간복잡도 - O(n)
for 루프가 order 배열을 한 번 순회하기 때문
*/
