// for문만 이용 (통과 될지 몰랐음..)
function solution(prices) {
    let result = []
    
    // 현재 가격 순회
    for(let i = 0; i < prices.length; i++){
        let time = 0
        // 현재 가격 이후 순회
        for(let j = i + 1; j < prices.length; j++){
            // 시간 증가
            time++
            // 현재 가격이 이후 가격보다 높다는 것은 떨어졌다는 소리이므로 중지
            if(prices[i] > prices[j]) break
        }
        result.push(time)
    }
    return result
}

/* 시간복잡도 
 - for(let i = 0; i < prices.length; i++)[prices 순회] : O(n)
    - for(let j = i + 1; j < prices.length; j++) [prices 순회] : O(n - i - 1)

 => 전체 시간 복잡도 : O(n^2)
*/

// 스택 이용
// 가격이 떨어지는 경우만 따로 추출해서 시간을 계산해주면 되는 문제
function solution(prices) {
    // 가격이 끝까지 떨어지지 않을 경우를 위해 초기값 0으로 설정
    let result = Array(prices.length).fill(0);
    let stack = [];

    prices.forEach((price, idx) => {
        // 스택이 존재 and 현재 가격이 스택의 마지막 인덱스의 가격보다 작을 때 (이전 보다 가격이 떨어지는 경우)
        while(stack && prices[stack[stack.length - 1]] > price){
            // 스택의 마지막 인덱스 값을 뽑아오고
            const stackTop = stack.pop()
            // 현재 인덱스와 뽑아온 인덱스 값으로 시간 차이를 저장
            result[stackTop] = idx - stackTop
        }
        // 현재 인데스를 스택에 추가       
        stack.push(idx)
    })
    
    // 스택에 남은 인덱스는 끝까지 가격이 떨어지지 않은 경우이므로, 유지된 시간을 계산
    stack.forEach((priceIdx) => {
        result[priceIdx] = prices.length - 1 - priceIdx
    })

    return result;
}

/* 시간복잡도 
 - prices.forEach((price, idx) [prices 순회] : O(n)
    - while(stack && prices[stack[stack.length - 1]] > price) : O(n)

 여기서 for문 안에 while문이 있어 O(n^2)이라고 생각했지만
 while이 단순 중첩 반복문이 아니고 특정상황(이전 보다 가격이 떨어지는 경우)에만 실행되므로
 O(n + n)으로 O(2n) 즉 O(n)이 된다.
    
 - stack.forEach((priceIdx) [stack 순회] : O(n)

 => 전체 시간 복잡도 : O(n^2)
*/

