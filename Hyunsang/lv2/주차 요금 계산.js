function solution(fees, records) {  
    // 주어진 기본 시간, 기본 요금, 단위 시간, 단위 요금을 각각 변수로 할당
    const [basicTime, basicFee, unitTime, unitFee] = fees;      
  
    // 차량별 누적 주차 시간을 저장
    const parkingTimes = {}; 
    // 차량의 입차 시간을 저장
    const inTimes = {};  
  
    // 주어진 기록(records)을 순회하면서 처리
    records.forEach(record => {    
      const [time, vehicle, action] = record.split(' ');
      const [hour, minute] = time.split(':').map(Number); 
      const minutes = hour * 60 + minute; 
        
      if (action === 'IN') { 
        // 입차인 경우, 해당 차량의 입차 시간을 저장
        inTimes[vehicle] = minutes; 
        
      } else { 
        // 출차인 경우
        const parkedTime = minutes - inTimes[vehicle]; // 입차 시간과 출차 시간의 차이를 계산
        parkingTimes[vehicle] = (parkingTimes[vehicle] || 0) + parkedTime; // 누적 주차 시간 갱신
        delete inTimes[vehicle]; // 입차 시간 기록 삭제
      }     
    });
  
    // 입차만 하고 출차 기록이 없는 차량 처리
    Object.keys(inTimes).forEach(vehicle => {    
      const parkedTime = 23 * 60 + 59 - inTimes[vehicle]; // 주차 시간 계산
      parkingTimes[vehicle] = (parkingTimes[vehicle] || 0) + parkedTime; // 누적 주차 시간 갱신
    });
  
    // 주차 요금 계산
    const feesByVehicle = Object.entries(parkingTimes).map(([vehicle, time]) => {    
      let fee = basicFee;
      if (time > basicTime) { 
        // 기본 시간을 초과한 경우 추가 요금 계산
        fee += Math.ceil((time - basicTime) / unitTime) * unitFee; 
      }
      return [vehicle, fee]; // 차량 번호와 요금을 반환
    });
  
    // 차량 번호 기준으로 정렬
    feesByVehicle.sort((a, b) => a[0] - b[0]);  
  
    // 최종적으로 요금만 추출하여 반환
    return feesByVehicle.map(([_, fee]) => fee); 
  }
  