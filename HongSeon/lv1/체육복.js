// 여벌 체육복을 가지고 있지만 도난당한 학생 추출 재정의 함수
// ex) lost = [2,4] reserve = [4] 
// =>  lost = [2] reserve = []
function Redefind(lost ,reserve){
    for (let i = 0; i < reserve.length; i++) {
        let index = lost.indexOf(reserve[i]); 
        if (index !== -1) {
            lost.splice(index, 1); 
            reserve.splice(i, 1); 
            i--; 
        }
    }
}

// 체육복을 빌려주는 함수
function Lend(lost, reserve) {
    for (let i = 0; i < reserve.length; i++) {
        const student = reserve[i]; //3
        const front = lost.indexOf(student - 1);  // 1
        const back = lost.indexOf(student + 1);  // 2

        if (front !== -1) {
            lost.splice(front, 1); // 앞번호 학생에게 빌려줌
        } else if (back !== -1) {
            lost.splice(back, 1); // 뒷번호 학생에게 빌려줌 
        }
    }
}

function solution(n, lost, reserve) {
    // *** 중요 *** 
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    
    Redefind(lost, reserve);
    Lend(lost, reserve);
    
    // 총 학생수 - 잃어버린 학생 수 = 가지고 있는 학생 수
    return n - lost.length;
}

// 다른 방법
function solution2(n, lost, reserve) {
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    
    // 잃어버린 학생과 여분의 체육복을 가진 학생을 Set으로 변환
    // Set을 사용하여 중복된 값을 제거하고 O(1) 시간에 빠른 검색과 삭제가 가능
    let lostSet = new Set(lost);
    let reserveSet = new Set(reserve);

    // 여분의 체육복을 가진 학생이 잃어버린 학생 목록에 있는 경우, 두 목록에서 해당 학생 제거
    for (let student of reserve) {
        if (lostSet.has(student)) {
            lostSet.delete(student); // 잃어버린 목록에서 해당 학생 제거
            reserveSet.delete(student); // 여분 목록에서 해당 학생 제거
        }
    }

    // 여분의 체육복을 가진 학생을 순회하며 인접한 학생에게 체육복을 빌려줌
    for (let student of reserveSet) {
        // 학생의 바로 앞 번호의 학생이 잃어버린 경우, 체육복을 빌려줌
        if (lostSet.has(student - 1)) {
            lostSet.delete(student - 1); // 잃어버린 목록에서 앞 번호 학생 제거

        // 그렇지 않으면 학생의 바로 다음 번호의 학생이 잃어버린 경우, 체육복을 빌려줌
        } else if (lostSet.has(student + 1)) {
            lostSet.delete(student + 1); // 잃어버린 목록에서 다음 번호 학생 제거
        }
    }

    return n - lostSet.size;
}


/* 시간복잡도
 - Redefind함수
    - for루프(reserve 배열) : O(m)
    - indexOf(lost 배열) : O(n)
    - splice(lost 배열) : O(n)
    - splice(reserve 배열) : O(m)

    => 시간 복잡도 : O(m*n)

 - Lend함수 
    - for루프(reserve 배열) : O(m)
    - indexOf(reserve 배열) : O(m)
    - indexOf(lost 배열) : O(n)
    - splice(lost 배열) : O(n)

    => 시간 복잡도 : O(m*n)

 - solution함수
    - sort(lost 배열) : O(nlogn)
    - sort(reserve 배열) : O(mlogm)
    - Redefind함수 : O(m*n)
    - Lend함수 : O(m*n)

 => 코드 전체 시간 복잡도 => O(nlogn + mlogm + m*n)

*/