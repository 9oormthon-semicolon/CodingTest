function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const parkingTimes = {};
    const inTimes = {};

    records.forEach(record => {
        const [time, carNumber, status] = record.split(' ');
        if (status === 'IN') {
            inTimes[carNumber] = time;
        } else {
            const inTime = inTimes[carNumber];
            delete inTimes[carNumber];
            const parkedMinutes = calculateMinutes(inTime, time);
            parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedMinutes;
        }
    });

    for (let carNumber in inTimes) {
        const inTime = inTimes[carNumber];
        const parkedMinutes = calculateMinutes(inTime, '23:59');
        parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedMinutes;
    }

    const feesByCar = Object.keys(parkingTimes).map(carNumber => {
        const totalMinutes = parkingTimes[carNumber];
        let fee = basicFee;
        if (totalMinutes > basicTime) {
            fee += Math.ceil((totalMinutes - basicTime) / unitTime) * unitFee;
        }
        return [carNumber, fee];
    });

    return feesByCar.sort((a, b) => a[0].localeCompare(b[0])).map(item => item[1]);
}

function calculateMinutes(startTime, endTime) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    return (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
}

/*
records 배열을 순회하면서 각 기록을 시간(time), 차량 번호(carNumber), 상태(status)로 분리
상태가 'IN'인 경우 inTimes 객체에 차량 번호를 키로 하여 입차 시간을 저장
상태가 'OUT'인 경우 입차 시간을 가져와 출차 시간과의 차이를 계산하여 parkingTimes 객체에 누적
미처리 입차 기록은 inTimes에 남아 있는 차량들은 출차 기록이 없는 것이므로 23:59에 출차한 것으로 간주하여 총 주차 시간을 계산

각 차량의 총 주차 시간을 기반으로 기본 요금과 초과 시간에 따른 추가 요금 계산
차량 번호를 기준으로 정렬하여 요금만 추출하여 반환

시간복잡도 - O(n + m log m) n은 전체 입출차 기록 수이고, m은 고유 차량 수
*/
