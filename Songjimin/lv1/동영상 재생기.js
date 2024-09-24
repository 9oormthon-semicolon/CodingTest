// "분:초" 형식을 "초"로 바꿔주는 함수
function timeToSeconds(time) {
  // "분:초"를 ":"로 나눠서 분과 초를 숫자로 바꾸고
  const [minutes, seconds] = time.split(':').map(Number);
  // 분을 초로 바꿔서 합쳐요. 예: 2분 30초 -> 150초
  return minutes * 60 + seconds;
}

// "초"를 다시 "분:초" 형식으로 바꿔주는 함수
function secondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);  // 초를 분으로 바꿔요
  const remainingSeconds = seconds % 60;  // 남은 초를 계산해요
  // 두 자리 숫자로 만들어서 "분:초"로 돌려줘요
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  // 주어진 시간들을 초로 변환해요
  let videoLength = timeToSeconds(video_len);  // 동영상 전체 길이
  let currentPosition = timeToSeconds(pos);    // 현재 위치
  let openingStart = timeToSeconds(op_start);  // 오프닝 시작 시간
  let openingEnd = timeToSeconds(op_end);      // 오프닝 끝나는 시간

  // 명령어들을 하나씩 처리해요
  for (let command of commands) {
    if (command === "prev") {
      // "prev" 명령어가 들어오면 10초 전으로 이동해요
      currentPosition = Math.max(0, currentPosition - 10);  // 0초보다 뒤로는 못 가요
    } else if (command === "next") {
      // "next" 명령어가 들어오면 10초 앞으로 이동해요
      currentPosition = Math.min(videoLength, currentPosition + 10);  // 동영상 길이 이상은 못 가요
    }

    // 현재 위치가 오프닝 구간이면 오프닝 끝으로 이동해요
    if (currentPosition >= openingStart && currentPosition <= openingEnd) {
      currentPosition = openingEnd;
    }
  }

  // 최종 위치를 다시 "분:초"로 바꿔서 돌려줘요
  return secondsToTime(currentPosition);
}
