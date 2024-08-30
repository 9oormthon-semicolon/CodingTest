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
    
    return n - lost.length;
}


/* 시간복잡도
 - 추가 예정
*/