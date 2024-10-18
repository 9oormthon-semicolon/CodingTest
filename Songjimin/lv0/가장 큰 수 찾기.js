function solution(array) {
	// 배열에서 가장 큰 값 찾음
	let maxValue = Math.max(...array);
	// 가장 큰 값의 인덱스 찾음
	let maxIndex = array.indexOf(maxValue);
	// 결과를 배열로 변환
	return [maxValue, maxIndex];
}
