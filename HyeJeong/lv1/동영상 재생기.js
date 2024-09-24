function solution(video_len, pos, op_start, op_end, commands) {
    let result = ''; // 결과를 저장할 변수
    
    // 입력 시간 문자열을 분과 초로 나누어 정수로 변환
    let full = video_len.split(":").map(Number);
    let current = pos.split(":").map(Number);
    let start = op_start.split(":").map(Number);
    let end = op_end.split(":").map(Number);
    
    // 광고 시작 및 종료 시간을 초로 변환
    let startSec = start[0] * 60 + start[1];
    let endSec = end[0] * 60 + end[1];

    // 현재 시간이 광고 시간 내에 있는지 확인하는 함수
    function isOpening() {
        let sec = current[0] * 60 + current[1]; // 현재 시간을 초로 변환
        return startSec <= sec && sec <= endSec; // 광고 시간에 포함되면 true 반환
    }

    // 각 명령어를 처리
    for (let i = 0; i < commands.length; i++) {
        // 현재 시간이 광고 시간 내에 있으면 광고 종료 시간으로 이동
        if (isOpening()) {
            current[0] = end[0];
            current[1] = end[1];
        }
        
        // 'next' 명령어 처리
        if (commands[i] === "next") { 
            current[1] += 10; // 초에 10초 추가
            if (current[1] > 59) { // 60초를 넘으면 분으로 올림
                current[0]++;
                current[1] -= 60;
            }
            // 전체 동영상 시간을 넘지 않도록 조정
            if (current[0] > full[0] || (current[0] === full[0] && current[1] > full[1])) {
                current[0] = full[0];
                current[1] = full[1];
            }
        } 
        // 'prev' 명령어 처리
        else if (commands[i] === "prev") {
            current[1] -= 10; // 초에서 10초 감소
            if (current[1] < 0) { // 0초 미만이면 분으로 조정
                current[0]--;
                current[1] = 60 + current[1]; // 60초에서 부족한 초를 더함
            }
            // 0시간 미만으로 가지 않도록 조정
            if (current[0] < 0) {
                current[0] = 0;
                current[1] = 0;
            }
        }

        // 명령어 처리 후 다시 광고 시간 내에 있으면 광고 종료 시간으로 이동
        if (isOpening()) {
            current[0] = end[0];
            current[1] = end[1];
        }
    }
    
    // 최종 결과를 HH:MM 형식으로 포맷
    result = `${(current[0] + "").padStart(2, '0')}:${(current[1] + "").padStart(2, '0')}`;
    return result; // 결과 반환
}

//시간복잡도
//시간을 변환하는 과정에서 2개의 요소를 가진 문자열을 분리해서 숫자로 변환하기에 상수시간 걸림
//명령어 처리하는 과정에서 commands 배열의 길이만큼 반복 - 상수시간
//최종 - 명령어 개수를 m이라고 한다면 시간복잡도는 O(m)
