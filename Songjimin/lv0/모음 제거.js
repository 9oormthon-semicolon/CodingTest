function solution(my_string) {
    // 모음 리스트
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // my_string에서 모음이 아닌 문자들만 필터링하여 반환
    return my_string.split('').filter(char => !vowels.includes(char)).join('');
}

/*
includes()는 배열이나 문자열에서 특정 값이 있는지 간단하게 확인하는데 유용
*/
