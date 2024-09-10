function solution(lottos, win_nums) {
    //로또 번호랑 맞는 수와 0의 수를 셈
    let correct = 0; 
    let fault = 0;

    //로또 번호에서 일치하는 번호와 0의 개수를 셈
    lottos.forEach(num =>{
        num === 0 ? fault++ : (win_nums.includes(num) ? correct++ : null);
    }); //num이 0이라면 fault 증가, 그렇지 않다면 win_nums에 num이 포함되어 있다면 correct를 증가
    //로또의 최고 순위와 최저 순위를 계산하는 과정 
    const high = Math.min(7-(correct+fault), 6);
    const low = Math.min(7-correct,6);
    
    return [high, low];
}

//시간복잡도
//forEach문 - O(n) n은 lottos 배열의 길이
//win_nums.includes(num) - O(m) m은 win_nums 배열의 길이
//O(n*m)
