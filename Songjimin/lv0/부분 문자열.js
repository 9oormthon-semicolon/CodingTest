function solution(str1, str2) {
	// str2에 str1이 포함되어있는지 확인하기
	if (str2.indexOf(str1) !== -1) {
		return 1;  // str1이 str2에 포함되면 1반환
	} else {
		return 0;  // 포함되지 않으면 0반환
	}
}

/*
  const solution = (str1, str2) => str2.includes(str1) ? 1 : 0;
*/
