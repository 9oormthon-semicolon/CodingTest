function solution(participant, completion) {
    const count = {}; 
    for (const finish of completion) {
        count[finish] = (count[finish] || 0) + 1;
    } //완주자 목록의 이름과 count를 해시 테이블로 확인
  
    for (const part of participant) { //참가자 목록을 반복하여 완주자 수 파악
        if (!count[part]) { //현재 참가자가 완주자 목록에 있는지 확인
            return part; //없으면 바로 반환
        } else {
            count[part]--; //그렇지 않다면 완주자 수 감소
        }
    }
}

//시간복잡도
//완주자 목록을 확인하는 과정에서 O(m) m은 완주자 배열의 길이
//참가자 목록을 확인하는 과정에서 O(n) n은 참가자 배열의 길이
//최종적으로 O(m) + O(n) => O(n)
