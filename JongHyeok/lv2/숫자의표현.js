function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n / 2; i++) {
        let sum = 0;
        for (let j = i; j <= n; j++) {
            sum += j;
            if(sum === n) {
                answer++;
                break;
            }
            if (sum > n) break;
        }
    }
    return answer + 1;
}
/*
처음에 단순하게 풀었던 반복문 2개를 최적화시켜보았습니다.
연속된 수로 이루어져 있을 때 (자기자신 하나만 있을 때 제외하고 answer+1)
절반까지만 탐색하면 됩니다.
시간복잡도 n^2로 동일하긴 하지만
n/2로 줄인 게 효율성 테스트에 도움이 됐네요.

console.log(solution(18));

/*
주어진 수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수 개수와 같습니다.

function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++) {
        if(n % i === 0 && i % 2 === 1) answer++;
    }
    return answer;
  }

ex) n이 20일 때: 1 2 4 5 10 20 > 1 5
약수가 1 > 연속하는 1개 자연수의 합으로 표현 가능
20 = 20
약수가 5 > 연속하는 1개 자연수의 합으로 표현 가능
2 + 3 + 4 + 5 + 6 = 20

ex) n이 15일 때: 1 3 5 15 > 1 3 5 15
약수가 1 > 연속하는 1개 자연수의 합으로 표현 가능
15 = 15
약수가 3 > 연속하는 3개 자연수의 합으로 표현 가능
4 + 5 + 6 = 15
약수가 5 > 연속하는 5개 자연수의 합으로 표현 가능
1 + 2 + 3 + 4 + 5 = 15
약수가 15 > 모든 홀수(2n+1)는 n과 n+1로 표현 가능
7 + 8 = 15

시간복잡도 O(n)

/*
처음에 dp로 풀어보았는데 효율성 테스트에 통과하지 못했습니다.
gpt에게 다른 방법도 물어보았습니다.

gpt의 풀이
---

function solution(n) {
    let count = 0;
    for (let k = 1; k <= Math.sqrt(2 * n); k++) {
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            count++;
        }
    }
    return count;
}

console.log(solution(15));

---

(let k = 1; k <= Math.sqrt(2 * n); k++) 이 부분 해설

1. k개의 연속된 자연수의 합을 S라고 하면:
S = x + (x+1) + (x+2) + ... + (x+k-1), 여기서 x는 시작 숫자입니다.
2. 이 합은 다음과 같이 표현할 수 있습니다:
S = kx + k(k-1)/2
3. 우리가 찾고 있는 것은 S = n인 경우입니다. 따라서:
n = kx + k(k-1)/2
4. x에 대해 풀면:
x = (n - k(k-1)/2) / k
5. x가 자연수이려면, (n - k(k-1)/2)가 k로 나누어 떨어져야 합니다.
이것이 바로 (n - (k * (k - 1)) / 2) % k === 0 조건의 의미입니다.

function solution(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i % 2 !== 0) { // 약수가 홀수일 때
                count++;
            }
            if (i !== n / i && (n / i) % 2 !== 0) {
                // 약수가 주어진 수의 제곱근이 아니면서 주어진 수를 해당 약수로 나눴을 때 홀수
                count++;
            }
        }
    }
    return count;
}

둘 다 시간복잡도 O(√n) 

수학을 못 하는 저는 gpt 없이는 이런 코드를 못 짜겠네요...
*/

