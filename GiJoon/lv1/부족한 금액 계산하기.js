function solution(price, money, count) {
    let sum = 0
    for(let i = 1; i<=count; i++) {
        sum += price * i
    }
    return sum-money > 0 ? sum-money : 0
}

//새로 생긴 놀이기구를 타려면 n만큼 값이 늘어나기에
// i만큼 값을 곱해서 더함

//O(n)
