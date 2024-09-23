function solution(brown, yellow) {
    const total_num = brown + yellow
    
    const getRightSqaure = (w,h) => {
        const square = (w+2) * (h+2)   
        return square === total_num
    }
    
    for(let yellow_H = 1; yellow_H <= Math.sqrt(yellow); yellow_H++){  
        
        const yellow_W = yellow / yellow_H 

        if (yellow_W !== yellow_W | 0) continue

        if(getRightSqaure(yellow_H,yellow_W)) 
            return [yellow_W+2,yellow_H+2]
    }
    
    return -1
}

// 넓이를 기억 못하고 격자 개수만 기억ㅋㅋ

// 카펫 전체 크기가 노란색 w+2 * h+2임
// 이는 노란색 w+2 * h+2 == yellow + brown임
// 순차적으로 높이나 넓이를 구해서 저 조건에 해당하는 w,h를 구함

// 노란색 박스 높이 기준 1부터 ~ 노란색 개수 제곱근까지 계산함
// 제곱근 이상은 중복 계산임 ex) [1,4] [2,2] [4,1] 이라고 가정하면 [4,1] 중복

// 참을 판별해주는 함수 따로 만들어서 일치하면 카펫의 길이를 리턴하게 풂
// 소수면 계산 안함 (yellow_W !== yellow_W | 0) 

//최대 yellow의 값에 제곱근 연산을 해준만큼 반복문이 반복된다
//따라서 O(sqrt(yellow))

//생각해보니 답이 무조건 나온다는 가정하에 
//제곱근 계산 따로 안해줘도 제곱근만큼 최대 계산할 것 같네여
