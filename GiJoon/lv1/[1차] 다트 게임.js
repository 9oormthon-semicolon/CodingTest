function solution(dartResult) {
    const SDT = {'S':1,'D':2,'T':3}
    const numReg = /\d+/
    const SDTReg = /[SDT]/
    const reg = new RegExp(/\d+[SDT][*#]?/, "g")

    let dartArr = dartResult.match(reg)
    let arr = []

    dartArr.forEach((v, idx) => {
        const number = v.match(numReg)[0]
        const sdt = v.match(SDTReg)[0]
        const bonus = typeof v[v.length - 1] === number ? null : v[v.length - 1]
        
        let sum = Number(number) ** SDT[sdt]

        if(bonus === "*"){
            if(arr.length > 0){
                arr[arr.length - 1] *= 2
            }
            sum *= 2
        }else if (bonus === "#"){
            sum *= -1
        }

        arr.push(sum)
    })
    return arr.reduce((cur, v) => cur+v, 0)
}
// S:1배 D:2배 T:3배
// #:지금 값 * -1
// *: 이전값 * 2 현재값 *2
//#와 *는 단 한번만 나옴


//숫자 ** sdt 의값을 꺼냄
//정규식으로 숫자 SDT 특수문자 분리
// \d+ = 숫자부터 숫자까지
// [SDT] 영문 S,D,T 분리
// [*#]? *,#가 있을 수도 없을 수도도 없을 수도

// 분리한 arr에서 또 추출
// number / sdt / #*
//나머지는 마지막 인덱스와 sum을 적절히 계산

//let dartArr = dartResult.match(reg) O(N)
// dartArr.forEach((v, idx) => {} O(N)
// v.match(numReg)[0] O(3~4)
// v.match(SDTReg)[0] O(3~4)
// arr.reduce((cur, v) => cur+v, 0) O(N)
// O(3N + 6~7)
// O(N)
