
function solution(n,battery = 0){
    //문제의 핵심은 최대한 순간이동을 많이 써야한다는 것 짝수면 /2하고 아니면 -1
    if(n === 0)
        return battery

    //짝수가 아니라면 -1 battery +1
    if(n%2)
        return solution(n-1,battery+1) //O(n)
    //짝수라면 나누기 2
    else
        return solution(n/2,battery) //O(log n)
}

//문제는 O(log n)과 O(n)두 가지의 방법의 계산을 하지만
//O(n)도 결국 -1하고 O(log n)의 계산을 하기 때문에
//시간복잡도는 O(log N)



