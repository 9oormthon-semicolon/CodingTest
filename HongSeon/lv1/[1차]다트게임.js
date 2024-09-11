function solution(dartResult) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let bonus = ["S", "D", "T"]
    let award = ["*", "#"]
    
    let result = []
    let num = ""
    let sum = 0
    
    for(let i of dartResult){
        // i번째 문자가 nums에 포함되면 num(문자열)에 추가
        // 10을 처리하기 위해 문자열을 이용
        if(nums.includes(Number(i))){
            num += i 
        }
        // i번째 문자가 bonus에 포함되면 num(문자열)을 숫자형으로 변환
        // num의 값을 S,D,T에 따라 제곱하여 result배열에 추가
        else if (bonus.includes(i)){
            num = Number(num)
            switch(i){
                case "S":
                    result.push(num ** 1)
                    break
                case "D":
                    result.push(num ** 2)
                    break
                case "T":
                    result.push(num ** 3)
                    break
            }
            num = ""
        }
        // i번째 문자가 award에 포함될때
        else if(award.includes(i)){
            switch(i){
                case "*":
                    // result 배열의 마지막 값(현재 점수)을 2배
                    result[result.length - 1] *= 2;
                    // 이전 값이 존재하면 길이가 1이상이므로
                    // 마지막 값의 이전값(이전 점수)도 2배
                    if (result.length > 1) { 
                        result[result.length - 2] *= 2;
                    }
                    break
                case "#":
                    // result 배열의 마지막 값(현재 점수)을 -1배
                    result[result.length - 1] *= -1
                    break
            }
        }
    }
    
    // 모든 점수 더하기
    for(let i =  0; i < result.length; i++){
        sum += result[i]
    }
    
    return sum
}

/* 시간 복잡도
 - for (let i of dartResult) 
   dartResult를 한 글자 씩 순회하므로 O(n)

 - nums.includes(Number(i)), bonus.includes(i), award.includes(i)
   배열길이가 11, 3, 2로 고정되어있음
   따라서 각각 O(11), O(3), O(2)이므로 상수시간 O(1)

   ** 어제의 로또의 최고순위와 최저순위도 배열길이가 고정되어있으므로 O(n*m)가 아니라
      O(1)인 것 같다
   
 - for (let i = 0; i < result.length; i++)
   result 배열의 길이는 dartResult의 길이에 비례
   result배열을 순회하므로 O(n)

 => 전체 시간 복잡도 => O(n)
*/