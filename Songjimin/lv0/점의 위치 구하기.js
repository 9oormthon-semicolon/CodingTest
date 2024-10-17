function solution(dot) {
    const [x, y] = dot;  // 배열에서 x, y 좌표 추출
    
    if (x > 0 && y > 0) {
        return 1;  // 제1사분면
    } else if (x < 0 && y > 0) {
        return 2;  // 제2사분면
    } else if (x < 0 && y < 0) {
        return 3;  // 제3사분면
    } else if (x > 0 && y < 0) {
        return 4;  // 제4사분면
    }
}

console.log(solution([2, 4]));   // 출력: 1 (제1사분면)
console.log(solution([-7, 9]));  // 출력: 2 (제2사분면)
console.log(solution([-5, -2])); // 출력: 3 (제3사분면)
console.log(solution([4, -6]));  // 출력: 4 (제4사분면)

/*
  function solution(dot) {
	// dot배열에서 첫번째 값(x좌표)와 두번째 값(y좌표)를 num&num2에 할당
	const [num, num2] = dot;
	
	// x와 y좌표 곱한 결과가 양수인지 확인
	// 양수인 경우는 (x,y) 모두 양수이거나 모두 음수인 경우에만 해당
	const check = num * num2 > 0;
	
	// 삼항연산자 이용하여 num값(x좌표)와 check의 결과에 따라 사분면을 결정
	// num > 0(x가 양수)인 경우 :
	// - check가 true면 제1사분면 (x>0, y>0) -> 1
	// - check가 false면 제4사분면 (x>0, y<0) -> 4
	// num <= 0 (x가 음수)인 경우 :
	// - check가 true면 제3사분면 (x<0, y<0) -> 3
	// - check가 false면 제2사분면 (x<0, y>0) -> 2
	return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
*/
