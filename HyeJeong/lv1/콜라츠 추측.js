function solution(num) {
    let count=0; //결과를 반환할 수행된 연산의 횟수
    while(num != 1){ //n의 값이 1이 될때까지 반복
        if(num % 2 ==0){ //짝수이면 num을 2로 나누고 횟수 추가
            num=num/2;
            count++;
        }
        else{ //홀수라면 num에 3을 곱하고 1을 더한 뒤 횟수 추가
            num = (num*3)+1;
            count++;
        }
    }
    return count >500 ? -1 : count; //만약 횟수가 500회 이상이라면 -1출력 그렇지 않다면 count출력
}

//시간복잡도
//num이 1이 될 때까지 반복하므로 O(log n)
