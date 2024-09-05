function solution(s) {
    //키 밸류 생성
    const num = {
        "zero":0,"one":1,"two":2,"three":3,
        "four":4,"five":5,"six":6,"seven": 7,
        "eight":8,"nine":9
    }
    //키 반복
    Object.keys(num).forEach(En=>{
        // 영단어를 기준으로 정규식 생성 "g" 텍스트 전부
        const reg = new RegExp(En,'g')
        // 정규식 체크
        console.log(reg.test(En))
        //해당하는 정규식에 맞는 텍스트만 숫자로 교체
        s = s.replace(reg,num[En])
    })

    //number 타입으로 변환
    return +s
}

//string이 섞여있는 영단어를 일치하는 숫자로 교체하면 되는 문제입니다.

//문제를 보고 영단어를 키,벨류로 바꿔 조건에 해당하는 텍스트를 교체하면
//풀 수 있을 것이라고 생각했습니다. 
//그래서 정규식과 replace를 사용하였습니다.

//우선 고정된 값을 키로 만들고 //num O(1)
//키 값을 순회하고 정규식을 거처 // Object.keys(num).forEach (O(10))
//알맞는 영단어를 전부 숫자로 교체합니다. ,'g'  

//교체하는 과정에서 문자열을 순회한다네요 //s.replace O(n)

// ---------------------------------------------------
// O(1) + O(10) + O(n)
// = O(n)

//다른 사람 풀이 보니까 split쓰면 간단하네요...