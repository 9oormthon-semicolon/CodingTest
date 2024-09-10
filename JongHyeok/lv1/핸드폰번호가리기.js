function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

const phone_number = "01033334444"
console.log(solution(phone_number));

/*
뒤의 4자리를 *으로 ...
repeat 함수의 시간복잡도는 O(n)
이 문제는 phone_number의 길이가 4이상 20이하이기 때문에
시간복잡도는 별 의미 없을 것 같다...
*/