function solution(my_string, alp) {
		// 정규식 이용하여 모든 alp 문자를 대문자로 변경
    const result = my_string.replace(new RegExp(alp, 'g'), alp.toUpperCase());
    return result;
}
