// Map을 이용해서 해시 사용
function solution(participant, completion) {
    let hash = new Map();
    
    // 참가자 이름을 해시에 저장
    for (let name of participant) {
        // 이름이 이미 hash에 존재하면, 값을 1 증가시킴
        if (hash.has(name)) hash.set(name, hash.get(name) + 1);
        // 이름이 처음 등장한 경우, hash에 추가하고 값을 1로 설정
        else hash.set(name, 1);
    }
    
    // 완주자 이름을 해시에서 빼기
    for (let name of completion) {
        // 완주자 이름에 해당하는 값을 1 감소시킴
        hash.set(name, hash.get(name) - 1);
    }
    
    // hash를 순회하여 값이 0보다 큰 이름을 찾기
    // 결국 값이 0보다 크다는 것은 완주를 하지 못했다는 것
    for (let [name, value] of hash) {
        if (value > 0) return name;
    }
}

/* 시간복잡도
    - (for (let name of participant))
        - participant 배열의 모든 요소를 순회하면서 hash에 저장 (배열 길이 n) 
        - Map에서의 has, get, set 메서드는 평균적으로 O(1)의 시간 복잡도를 가짐
        - 시간 복잡도 = O(n)
    
    - (for (let name of completion))
        - completion 배열의 모든 요소를 순회하면서 hash에서 값을 1씩 감소 (배열 길이 m)
        - 위와 마찬가지로 set 메서드는 평균적으로 O(1)의 시간 복잡도를 가짐
        - 시간 복잡도 = O(m)
    
    - (for (let [key, value] of hash))
        - hash의 모든 키-값 쌍을 순회
        - hash의 크기는 최대 참가자 배열의 크기 (n)
        - 시간 복잡도 = O(n)

    * 전체 시간 복잡도는 O(n) + O(m) + O(n) = O(n + m)이 되지만
    * 문제의 특성상 m = n - 1 (n은 참가자 배열의 크기, m은 완주자 배열의 크기)이므로
    * O(n) + O(n-1) + O(n) = O(n-1)이 됨
    
    => 전체 시간복잡도 : O(n)
*/