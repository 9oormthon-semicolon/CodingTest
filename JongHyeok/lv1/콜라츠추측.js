function solution(num) {
    var answer = 0;
    let count = 0;

    while (count < 500){ // 500번 반복

        if (num !== 1) { // num이 1이 아닐 때의 조건
            num = num % 2 === 0 ? num / 2 : num * 3 + 1; 
        } else { //num이 됐을 때의 반복 횟수 리턴
            return count;
        }
        count++;
    }
    return answer = -1; // 500번 반복할 동안 1이 나오지 않으면 -1 리턴
}

/*
num 1이 될 때까지 2로 나누거나 3으로 나눠서 1을 더하는 과정을 반복합니다.
while 반복문이 최대 n(500)번까지 반복하기 때문에 시간복잡도는 O(n)입니다.
*/