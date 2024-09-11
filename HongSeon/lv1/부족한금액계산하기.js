function solution(price, money, count) {
    // 요금
    let result = 0;
    
    // 1부터 count까지
    for(let i = 1; i <= count; i++){
        // i번째는 가격을 i배 받음
        result += price * i
    }
    
    // 돈이 적다면 요금 - 가지고 있는 돈 리턴
    // 돈이 안적다면 0 리턴
    return result > money ? result - money : 0
}

/* 시간 복잡도
 - for(let i = 1; i <= count; i++) 
   count는 n번이므로 O(n)

 => 전체 시간 복잡도 => O(n)
*/