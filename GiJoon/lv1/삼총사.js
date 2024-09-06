function solution(number) {
    let result = 0
    
    const compute = (sum,start,num) => {
        if(num === 3){
            if(sum === 0) result++
            return
        }
        for(let i = start; i < number.length; i++){
            //누적값 + 현재값
            const sumVal = sum+number[i]
            compute(sumVal, i + 1, num + 1)
        }
    }
    compute(0,0,0)
    
    return result
}

// 중복없이 배열의 세 값의 합이 0인 모든 경우에 수를 구하는 문제입니다.
// 재귀를 이용한 삼중 반복문으로 모든 경우의 수를 구하여
// 모든 경우의 수 중 합이 0인값의 수를 셌습니다. 

//O(N^3)




