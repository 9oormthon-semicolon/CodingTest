function solution(n_str) {
    // 왼쪽에서 처음으로 등장하는 0들을 제거
    return n_str.replace(/^0+/, '');
}

/*
  const solution = (str) => String(Number(str));
  문자열 str을 숫자로 변환한 다음, 다시 문자열로 변환하는 방식으로 0을 제거하는 방법
*/
