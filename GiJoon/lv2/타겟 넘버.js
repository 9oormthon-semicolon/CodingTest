function solution(numbers, target) {
    let num = 0 
    let limit = numbers.length;
    
    (function func(sum, idx){
        if(limit <= idx){
            if(sum === target)
                num++
        }
        else{
            func(sum + numbers[idx], idx + 1) 
            func(sum - numbers[idx], idx + 1) 
        }
    })(0,0)
    
    return num
}

//음이 아닌 정수들의 합이나 차를
//모든 경우의 수를 구해야하기 떄문에
//DFS로 구현


//한 수로 두 가지의 계산을 반복하기에
//O(2^N) 

