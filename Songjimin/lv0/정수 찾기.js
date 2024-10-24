function solution(num_list, n) {
	// num_list에 n이 포함되어 있으면 1, 없으면 0
	return num_list.includes(n) ? 1 : 0;
}
