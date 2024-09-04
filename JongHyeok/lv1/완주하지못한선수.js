function solution(participant, completion) {
    let combination = participant.concat(completion); 
    let filtered = combination.filter(item => !participant.includes(item) || !completion.includes(item));
    let result = filtered.join('');
    return result;
}

/*
 participant와 completion을 합칩니다. concat 시간복잡도 O(n)
 combination 배열에서 participant와 completion에 모두 포함되지 않는 요소를 찾습니다. filter 시간복잡도 O(n)
 필터링된 요소를 문자열로 합칩니다. join 시간복잡도 O(n)
 */