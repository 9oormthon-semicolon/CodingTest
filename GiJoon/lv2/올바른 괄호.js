function solution(s){
    let cnt = 0

    //짝이 맞으면 cnt가 0이됨 0이하면 짝을 지을 수가 없다
    for(const c of [...s]){
        c === '(' ? cnt++ : cnt --
        if(cnt < 0) break
    }

    return cnt === 0 ? true : false
}
