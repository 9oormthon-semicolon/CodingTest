function solution(n) {
	const sqrt = Math.sqrt(n);
	return Number.isInteger(sqrt) ? 1 : 2;
}

/*
  function solution(n) {
  	return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  }
*/
