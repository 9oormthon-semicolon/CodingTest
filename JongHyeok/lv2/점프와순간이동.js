function solution(N) {
    let Nbin = N.toString(2);
    console.log(Nbin);
    binArr = Nbin.split('');
    let count = binArr.reduce((cnt, element) => cnt + ('1' === element), 0);
    return count;
}

const N = 13;
console.log(solution(N));

/* 
    가야 하는 거리 N을 2의 제곱수들과 나머지 1로 표현할 수 있습니다.
    N을 2진수로 변환하여 1의 개수를 세면 배터리의 사용량이 나옵니다.

    N을 거꾸로 2로 계속 나누었을 때 2의 제곱수가 아닌 한,
    나머지가 1이 나오는 상황이 있습니다.
    그 떄 배터리 사용량으로 1을 빼고, (홀수를) 나눈 수의 소수점 아래를 버려줍니다.
    N이 0이 될 때까지 2로 나누는 것을 반복하면 총 건전지 사용량이 나옵니다.
    (10진수 > 2진수 변환 과정)

    시간복잡도: 10진수를 2진수로 변환하는 과정 O(log N)
    일반적인 reduce 함수는 O(n)의 시간복잡도를 가지지만,
    이진수로 변환한 N에 대해서 순회하는 시간복잡도는 O(log N)입니다.
    전체 시간복잡도는 O(log N)입니다.  
*/