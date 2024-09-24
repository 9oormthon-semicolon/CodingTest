function timeToSec(time) { // 시간을 초로
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
}

function secToTime(sec) { // 초를 분과 초로
    const min = Math.floor(sec / 60);
    const leftSec = sec % 60;
    return `${String(min).padStart(2, '0')}:${String(leftSec).padStart(2, '0')}`;
    // 분이나 초가 1자리일 경우 0으로 채움
}

function solution(video_len, pos, op_start, op_end, commands) {
    const videoLenSeconds = timeToSec(video_len);
    let posSec = timeToSec(pos);
    const op_startSec = timeToSec(op_start);
    const op_endSec = timeToSec(op_end);
    // 모든 시간을 초로 변환

    posSec = (posSec >= op_startSec && posSec <= op_endSec) ? op_endSec : posSec;
    // 초기 상태에 현재 위치가 오프닝의 위치면 바로 오프닝 끝 위치로

    for (const command of commands) {
        if (command === "prev") { // prev 명령어
            posSec = Math.max(0, posSec - 10);
        } else if (command === "next") { // next 명령어
            posSec = Math.min(videoLenSeconds, posSec + 10);
        }

        if (posSec >= op_startSec && posSec <= op_endSec) {
            posSec = op_endSec; // 오프닝 스킵
        }
    }
    return secToTime(posSec);
}

// const video_len = "07:22";
// const pos = "04:05";
// const op_start = "00:15";
// const op_end = "04:07";
// const commands = ["next"];

const video_len = "10:55";
const pos = "00:05";
const op_start = "00:15";
const op_end = "06:55";
const commands = ["prev","next","next"];

console.log(solution(video_len, pos, op_start, op_end, commands));

/*
반복문의 1개이기 때문에 시간복잡도 O(n)
(시간복잡도나 효율성보단 구현에 주안점을 둔 문제라 시간복잡도가 중요할 것 같진 않습니다...)

달력을 구현할 때처럼 초가 60초 이상이면 1분 + 단위 변환하는 것이 귀찮아서 처음부터 초로 변환하여 풀었습니다.
초를 다시 몇 분 몇 초로 변환하는 과정에서 분이나 초가 1자리면 앞자리를 0으로 채워야 하는데,
padStart라는 함수가 있길래 써보았습니다... 
문자열 채울 때 유용하네요...
*/