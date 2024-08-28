function solution(arr){
    let stack = arr[0], arr_ = []
    
    //다음 요소랑 다르면 push
    arr.forEach((v, idx) => {
        if(stack !== v){
            arr_.push(stack)
            stack = v
        }
    })
    //마지막 인덱스 처리
    if(stack !== arr_[arr_.length - 1]) {
        arr_.push(stack)
    }
    
    return arr_
}

//반복문 1개라서 O(n)의 시간복잡도를 가짐