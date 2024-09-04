function solution(n) {
    return parseInt( n.toString(3).split('').reverse().join(''), 3)
    
    // toString() n을 3진수로 변환  O(log₃(n))
    // split('') 3진수 문자열을 문자 배열로 변환 O(log₃(n))
    // reverse() 배열 순서 뒤집고 O(log₃(n))
    // join('') 배열을 다시 문자열 합침 O(log₃(n))
    //parseInt(..., 3) : 3진수 -> 10진수로 정수 변환 O(log₃(n))
}

// 시간복잡도 O(log₃(n))