function solution(seoul) {
    var answer = '';
    let idx = seoul.indexOf("Kim");
    answer += `김서방은 ${idx}에 있다`
    return answer;
}

// indexOf 시간복잡도 O(n)