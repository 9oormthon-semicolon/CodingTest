function solution(price, money, count) {
    let total=0; //총 금액
    for(let i=1; i<=count; i++){
        total+=(price*i);
        
    }
    const zero = total-money;
    return zero > 0 ? zero : 0; //부족한 금액이 없으면 0 반환
}

//시간복잡도
//for문에서 1부터 count까지 반복
//O(count) : count만큼 반복되므로 
