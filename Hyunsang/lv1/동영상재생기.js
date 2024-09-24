function solution(video_len, pos, op_start, op_end, commands) {
    // 시작하는 위치 세팅
    let posArr = pos.split(':');
    let startMin = +posArr[0];
    let startSec = +posArr[1];
    let startTotalTime = startMin * 60 + startSec;

    // 오프닝 시작 시간 세팅
    let opStartArr = op_start.split(':');
    let opStartMin = +opStartArr[0];
    let opStartSec = +opStartArr[1];
    let opStartTotalTime = opStartMin * 60 + opStartSec;

    // 오프닝 끝나는 시간 세팅
    let opEndArr = op_end.split(':');
    let opEndMin = +opEndArr[0];
    let opEndSec = +opEndArr[1];
    let opEndTotalTime = opEndMin * 60 + opEndSec;

    // 처음 시작 위치가 오프닝 안에 있을 때 오프닝 끝 시간으로 이동
    if (startTotalTime >= opStartTotalTime && startTotalTime <= opEndTotalTime) {
        startTotalTime = opEndTotalTime;
    }

    const videoLenArr = video_len.split(':');
    const videoLenTotalTime = (+videoLenArr[0]) * 60 + (+videoLenArr[1]);

    // commands 처리
    commands.forEach((command) => {
        switch (command) {
            case "next":
                startTotalTime += 10;
                if (startTotalTime > videoLenTotalTime) {
                    startTotalTime = videoLenTotalTime; // 영상 길이를 넘지 않도록 설정
                }
                break;
            case "prev":
                startTotalTime -= 10;
                if (startTotalTime < 0) {
                    startTotalTime = 0; // 0초 이하로 내려가지 않도록 설정
                }
                break;
        }

        // 오프닝 구간에 걸리면 오프닝 끝으로 이동
        if (startTotalTime >= opStartTotalTime && startTotalTime <= opEndTotalTime) {
            startTotalTime = opEndTotalTime;
        }
    });
    
    // 다시 분과 초로 나눔.
    let finalMin = Math.floor(startTotalTime / 60);
    let finalSec = startTotalTime % 60;

    return `${finalMin < 10 ? '0' : ''}${finalMin}:${finalSec < 10 ? '0' : ''}${finalSec}`;
}

/**
 * 시간복잡도:
 * commands 처리 O(n)
 * 나머지 과정 다 상수 시간 걸림
 * 최종 O(n)
 */