function solution(babbling) {
    const reg1 = /(aya|ye|woo|ma)\1+/;
    const reg2 = /^(aya|ye|woo|ma)+$/;
   
    return babbling.reduce((answer, word) => (
      !reg1.test(word) && reg2.test(word) ? ++answer : answer
    ), 0);
}

/*
reg1
/(aya|ye|woo|ma)\1+/ =>
    (aya|ye|woo|ma) > aya나 ye나 woo나 ma 중에 일치하는 게 있는지,
    \1 [역참조] > 해당 문자열이 반복되는지
    + [하나 이상] > 1번이상 반복되는지
ayaaya, yeye 같은 겨우를 감지하는 정규표현식

reg2
/^(aya|ye|woo|ma)+$/ =>
    ^ [시작] $ [끝] > 문자열의 시작부터 끝까지 aya나 ye나 woo나 ma로 이루어져 있는지
    + [하나 이상] > 1번이상 반복되는지


reg2는 처음부터 끝까지 특정 패턴으로 문자열이 이루어져 있는지 검사하며
reg1은 중복된 단어가 연속으로 나오는 경우를 감지한다.
!reg1(중복&연속되지 않은 경우) && reg2(처음부터 해당 단어들로만 이루어져 있는 경우)를 쓰면
발음할 수 있는 옹알이를 찾을 수 있다.

---

제한사항
1 ≤ babbling의 길이 ≤ 100 => n
1 ≤ babbling[i]의 길이 ≤ 30 => m

---
n에 대한 reduce 함수(시간복잡도 O(n))와
각 문자열에 대한 test 함수(시간 복잡도 O(m))이
중첩돼 사용되었기 때문에 전체 시간복잡도는 O(n*m) 
*/