// 다른사람의 풀이를 보며 코드 흐름을 익혔습니다 !

function solution(video_len, pos, op_start, op_end, commands) {
  // 현재 위치를 초로 변환
  // 초기 설정: O(1)
  let cur_s = convertToSec(pos);
  // 동영상 끝 시간을 초로 변환
  const end_s = convertToSec(video_len);

  // 현재 위치가 광고 구간 내에 있다면, 광고 끝으로 이동
  // 초기 광고 체크: O(1)
  if (is_inside_op(cur_s, op_start, op_end)) {
    cur_s = convertToSec(op_end);
  }

  // 각 명령어에 대해 처리
  // 명령어 처리: O(n), n은 commands의 길이
  commands.forEach((command) => {
    // 각 명령어 처리: O(1)
    if (command === "next") {
      // 다음으로 이동
      cur_s = next(cur_s, end_s);
    } else {
      // 이전으로 이동
      cur_s = prev(cur_s, end_s);
    }
    // 이동 후 광고 구간 내에 있다면, 광고 끝으로 이동
    // 광고 체크: O(1)
    if (is_inside_op(cur_s, op_start, op_end)) {
      cur_s = convertToSec(op_end);
    }
  });

  // 최종 위치를 시:분 형식의 문자열로 변환하여 반환
  // 결과 변환: O(1)
  return convertToFormatString(cur_s);
}

// 다음으로 10초 이동하는 함수
function next(cur_sec, end_sec) {
  const result = cur_sec + 10;
  // 동영상 끝을 넘어가면 끝 시간 반환
  if (result >= end_sec) {
    return end_sec;
  }
  return result;
}

// 이전으로 10초 이동하는 함수
function prev(cur_sec) {
  const result = cur_sec - 10;
  // 0초 미만으로 가면 0 반환
  if (result < 0) {
    return 0;
  }
  return result;
}

// 현재 위치가 광고 구간 내에 있는지 확인하는 함수
function is_inside_op(cur_sec, op_start, op_end) {
  const ops = convertToSec(op_start);
  const opend = convertToSec(op_end);
  return ops <= cur_sec && cur_sec <= opend;
}

// 시:분 형식의 문자열을 초로 변환하는 함수
function convertToSec(formatString) {
  // 구조 분해 할당
  const [m, s] = formatString.split(":").map(Number);
  return 60 * m + s;
}

// 초를 시:분 형식의 문자열로 변환하는 함수
function convertToFormatString(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return m + ":" + s;
}

// 시간복잡도
// next, prev, is_inside_op, convertToSec, convertToFormatString: 모두 O(1)

// 주요 시간 복잡도는 commands 배열을 순회하는 부분에서 발생
// 각 명령어 처리는 상수 시간 O(1)이지만, 이를 commands의 길이(n)만큼 반복

// 전체 시간 복잡도->
// O(n)입니다. 여기서 n은 commands 배열의 길이
