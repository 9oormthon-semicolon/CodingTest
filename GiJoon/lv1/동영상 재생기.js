function solution(video_len, pos, op_start, op_end, commands) {
    const {
        getState,
        getCurSec,
        useCommand,
        changeTimeForm
    } = videoHook(pos, video_len, op_start, op_end)
    
    //시작이 오프닝 구간이면 먼저 오프닝 끝으로 이동
    if(getState(getCurSec()) === "opening") useCommand("opening")
    
    commands.forEach(cmd => {
        //prev,next 처리
        useCommand(cmd)
        
        //처리 후에도 오프닝 구간이면 다시 오프닝 끝으로 이동
        if(getState(getCurSec()) === "opening") useCommand("opening")
    })

    //시간 폼으로 현재시간 반환
    return changeTimeForm(getCurSec())
}





//비디오 훅
const videoHook = (pos, video_len, op_start, op_end) => {
    
    //초로 변환해주는 훅
    const changeSecForm = (time) => {
        const [m, s] = time.split(':')
        return Number(m) * 60 + Number(s)
    }
    
    const skipTime = 10 //스킵 시간
    let curSec = changeSecForm(pos) //현재시간(초)
    const OPEND = changeSecForm(op_end) //오프닝 끝나는 시간(초)
    const OPSTART = changeSecForm(op_start) //오프닝 시작 시간(초)
    const VIDEOLEN = changeSecForm(video_len) //비디오 전체 길이(초)
    
    const fillZero = (num) => num.toString().padStart(2,"0")
    
    //커맨드 사용 훅
    const useCommand = (state) => {
        switch (state) {
            case "prev":
                curSec = Math.max(0, curSec - skipTime)
                break
            case "next":
                curSec = Math.min(VIDEOLEN, curSec + skipTime)
                break
            case "opening":
                curSec = OPEND
                break
        }
    }
    
    //현재시간 반환 
    const getCurSec = () => curSec
    
    //00:00 단위로 변환 뒤 반환
    const changeTimeForm = (sec) => {
        const s = sec % 60
        const m = (sec / 60) | 0
        return `${fillZero(m)}:${fillZero(s)}`
    }
    
    //오프닝 || 플레이 상태 반환
    const getState = (sec) => {
        if(OPSTART <= sec && sec <= OPEND) return 'opening'
        return 'play'
    }
    
    return {
        getState,
        getCurSec,
        useCommand,
        changeTimeForm
    }
}

/* 

일단
0 ≤ mm ≤ 59 / 0 ≤ ss ≤ 59 이므로
영상은 모두 1시간 미만입니다. 
59:59를 벗어날 수 없네요.
그리고 계산하기 쉽게 모두 초로 바꿔서 연산을 했습니다.

문제는 command에 따라 +10s -10s 해주고
opening구간이면 어느 동작을 했던 안했던 시간이 
OPEND로 가야한다는 것 뺴고는 특이사항 없습니다.

프런트 기능 구현 같아서 커스텀 훅처럼 
그냥 변수랑 전용 함수 분리해서 만들었습니다. 코드가 엄청 길고 가독성도 별로네요...

풀다가 걸렸던 부분은 시작을하든 prev든 next는 오프닝 구간에 걸쳐있으면 오프닝 끝으로 가야합니다. 
문제를 제대로 안읽고 next 동작을 했을 때만 오프닝 스킵을 했었고,처음 시작해도 오프닝 구간에 걸쳐있으면 
무조건 OPEND로 시간이 바뀌어야한다는 것을 3번 예제보고 깨달았습니다.

나온지 얼마 안됐고, 스킵 기능이 통상적인 동작이 아니고 또 부족한 설명을 예제에다가 해놓아서 정답률이 33%같아요...

시간복잡도는 O(commands)
*/
