function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=n; i++){
        if(n % i === 0 && i % 2 === 1){
            answer++;
        }
    }
    return answer;
}

/*
n의 약수 중 홀수인 것의 개수를 세는거랑 연속된 자연수의 합으로 n을 표현하는 방법의 수와 동일함

시간복잡도 - O(n)

수학 문제 너무 어렵네요.....
*/
