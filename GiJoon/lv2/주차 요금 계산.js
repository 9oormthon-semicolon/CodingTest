function solution(fees, records) {
    let answer = {};
    const obj = {};
    
    
    const transSec = (time) => Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
    const TimeLimit = transSec("23:59");
    
    //비용 계산
    const computeCharge = (value) => {
        const t = value[1] - fees[0];
        
        return t > 0 ? fees[1] + Math.ceil(t / fees[2]) * fees[3] : fees[1];
    };
    
    
    //시간 추출
    for (const v of records) {
        const [t, num, state] = v.split(' ');
        const time = transSec(t);
        if (state == "IN") {
            obj[num] = time;
            continue;
        }
        
        if (!answer[num]) answer[num] = 0;
        
        answer[num] += (time - obj[num]);
        
        delete obj[num];
    }
    
    //출차 안한 차량 추출
    Object.entries(obj).forEach(v => {
        const [num, time] = v;
        
         if (!answer[num]) answer[num] = 0;
        
        answer[num] += (TimeLimit - time);
    });
    
    //결과 숫자순 정렬 뒤 요금 추출
    return Object.entries(answer).sort((a, b) => a[0] - b[0]).map(computeCharge);
}

/*
    두 번 들어오는 차량에 새로운 요금을 부과하는게 아니라, 토탈 시간 기준으로 주차요금을 계산하면 되는 문제
    
    두 개의 object를 사용하여 구현했습니다.
    
    시간 추출 = O(n) 
    출차 안한 차량 추출 = O(n)
    결과 숫자순 정렬 뒤 요금 추출 = O(nlogn) + O(n)
    
    O(n log n)
*/