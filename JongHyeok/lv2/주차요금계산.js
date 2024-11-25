function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const parkingTime = {}; //  주차 시간
    const inProgress = {}; // 기록

    // 시간 > 분
    const toMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    // 요금 계산
    const calculateFee = (time) => {
        if (time <= baseTime) return baseFee;
        return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
    };

    // 입/출차 기록 처리
    for (const record of records) {
        const [time, carNumber, action] = record.split(' ');
        const minutes = toMinutes(time);
         
        if (action === "IN") inProgress[carNumber] = minutes; // 입차
        else { // 출차
            const parkedTime = minutes - inProgress[carNumber];
            parkingTime[carNumber] = (parkingTime[carNumber] || 0) + parkedTime;
            delete inProgress[carNumber]; // 출차 완료된 차량 제거
        }
    }

    // 출차 내역 없는 차량 (23:59에 출차된 것으로 간주합니다.)
    for (const [carNumber, inTime] of Object.entries(inProgress)) {
        const parkedTime = toMinutes("23:59") - inTime;
        parkingTime[carNumber] = (parkingTime[carNumber] || 0) + parkedTime;
    }

    // 차량 번호 순으로 정렬 후 요금 계산
    return Object.keys(parkingTime)
        .sort((a, b) => a - b)
        .map(carNumber => calculateFee(parkingTime[carNumber]));
}

const fees = [180, 5000, 10, 600];
const records = [
    "05:34 5961 IN", 
    "06:00 0000 IN", 
    "06:34 0000 OUT", 
    "07:59 5961 OUT", 
    "07:59 0148 IN", 
    "18:59 0000 IN", 
    "19:09 0148 OUT", 
    "22:59 5961 IN", 
    "23:00 5961 OUT"
];
console.log(solution(fees, records));



