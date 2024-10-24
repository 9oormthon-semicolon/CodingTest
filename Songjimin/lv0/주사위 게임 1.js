function solution(a, b) {
    // a와 b가 모두 홀수인 경우
    if (a % 2 === 1 && b % 2 === 1) {
        return a * a + b * b;
    }
    // a와 b 중 하나만 홀수인 경우
    else if (a % 2 ===1 || b % 2 === 1) {
        return 2 * (a + b);
    }
    // a와 b가 모두 홀수 아닌 경우
    else {
        return Math.abs(a - b);
    }
}

/*
  다른 사람의 문제 풀이
  function solution(a,b) {
  	const isOdd = (num) => num % 2 === 1;
  	
  	return isOdd(a) && isOdd(b)
  		? a ** 2 + b ** 2
  		: isOdd(a) || isOdd(b)
  		? 2 * (a + b)
  		: Math.abs(a-b);
  }
*/
