function solution(money) {
    // 아아 한잔 가격
    const price = 5500;
    // 살 수 있는 최대 잔 수
    const count = Math.floor(money / price);
    // 남는 돈 (나머지)
    const change = money % price;
    
    return [count, change];
}

console.log(solution(5500));  //출력: [1, 0]
console.log(solution(15000)); //출력: [2, 4000]

/*
다른사람의 문제풀이
function solution(money) {
	return [Math.floor(money / 5500), money % 5500];
}
*/
