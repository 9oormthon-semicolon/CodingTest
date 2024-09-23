function solution(brown, yellow) {
    const sum = brown + yellow; //전체 카펫 수
    
    for(let i=3; i<=Math.sqrt(sum); i++){ //가로 세로 찾기
        if(sum % i === 0){
            const width = sum / i;
            if((width-2) * (i - 2) === yellow){ //길이 계산
                return[width, i];
            }
        }
    }
}

//시간복잡도
//brown과 yellow의 합 계산은 상수시간 O(1)
//반복문 - O(√sum)
//조건문또한 각 반복에서 상수시간
//전체 시간복잡도 - O(√sum)
