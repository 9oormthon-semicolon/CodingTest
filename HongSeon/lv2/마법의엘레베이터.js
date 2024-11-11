// Greedy 알고리즘
function solution(storey) {
    let result = 0

    while (storey > 0) {
        // 1의 자리
        let units = storey % 10
        // 10의 자리
        let tens = Math.floor(storey / 10) % 10
        
        // 1의 자리가 6 ~ 9인 경우 (6 ~ 9 는 반올림하여 가는 게 더 최소)
        if (units > 5) {
            // (10 - 1의 자리) 만큼 버튼 누름
            result += (10 - units)
            // 1의 자리를 0으로 만듬 (storey 반올림)
            storey += (10 - units)
        }
        // 5인 경우는 10의 자리를 고려해야함
        // 10의 자리가 5이상인 경우 반올림을 하면 6으로 가기 때문에 반올림처리가 최소
        // 아닌 경우는 내림처리가 최소
        else if(units === 5){
            if(tens >= 5){
                // (10 - 1의 자리) 만큼 버튼 누름
                result += (10 - units)
                // 1의 자리를 0으로 만듬 (storey 반올림)
                storey += (10 - units)
            }
            else {
                // 1의 자릿수만큼 버튼 누름
                result += units
                // 1의 자리를 0으로 만듬
                storey -= units
            }
        }
        // 1의 자리가 1 ~ 4인 경우 (그냥 그대로 내려가는게 최소)
        else {
            // 1의 자릿수만큼 버튼 누름
            result += units
            // 1의 자리를 0으로 만듬
            storey -= units
        }
        
        storey = Math.floor(storey / 10)
    }

    return result
}

/* 시간 복잡도
 ** storey = n

 - while (storey > 0) : O(log10(n)) 

 => 전체 시간 복잡도 : O(log10(n)) 
*/
