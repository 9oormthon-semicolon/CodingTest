function solution(orders, course){
    let result = []
    // 조합 저장 객체
    let mix = {}

    // 오름차순 정렬
    orders.sort()
    
    // 조합 만드는 함수
    const combi = (idx, s, len, str, visited, start) => {
        // 목표길이에 도달하면 조합을 정렬 후 mix에 저장
        if(idx === len){
            // 조합된 문자열 정렬
            str = str.split("").sort().join("")
            // 이미 있다면 +1, 없다면 1로 초기화
            mix[str] = mix[str] ? mix[str]+1 : 1
        }
        
        // 재귀 호출 
        else {
            for(let i=start; i < s.length; i++){
                // 방문하지 않은 인덱스만 처리
                if(!visited[i]){
                    // 방문 표시
                    visited[i] = true
                    // 조합에 현재 문자 추가
                    combi(idx+1, s, len, str+s[i], visited, i+1)
                    // 다시 호출을 위해 방문 상태 초기화
                    visited[i] = false
                }
            }
        }

    }

    // 각 주문에서 가능한 코스 길이 만큼 조합 생성
    for(let i = 0; i < orders.length; i++){
        // 방문 여부 배열(false로 초기화)
        let visited = Array(orders[i].length).fill(false)

        // 주문의 길이가 코스 길이 이상일 때만 조합 생성
        for(let j = 0; j < course.length; j++){
            if(orders[i].length >= [j]){
                combi(0, orders[i], course[j], "", visited, 0)
            }
        }
    }

    // 객체를 배열로 변경
    let arr = Object.entries(mix)

    for(let i = 0; i < course.length; i++){
        // 카운트 수
        let count = 0
        // 가장 많이 나온 조합을 저장할 배열    
        let val = [] 
        for (const [k, v] of arr) {
            // 현재 조합의 길이가 course[i]와 일치하는지 확인
            // 조합의 길이가 원하는 코스 길이와 일치하지 않으면 건너뜀
            if (k.length === course[i]) {
                // 현재 조합의 카운트가 이전에 기록된 최대 빈도보다 크고 2 이상인 경우
                if (v > count && v > 1) {
                    // count 갱신
                    count = v;
                    // 새로운 최댓값 조합 저장
                    val = [k]; 
                } 
                // 현재 조합의 카운트가 최대 빈도와 같은 경우
                else if (v === count) val.push(k); // 같은 카운트의 조합을 추가
            }
        }

        // 결과 배열에 추가
        result = [...result, ...val]
    }

    // 오름차순 정렬
    return result.sort()

}

/* 시간복잡도

 orders.sort() : O(nlogn)
    - n은 주문 배열의 길이 (최대 20)
    - 문자열 배열을 사전순으로 정렬하는 시간 복잡도

 combi 함수 : O(mCk)
    - m은 각 주문의 문자열 길이 (최대 10), k는 course 배열에서 요청한 조합 길이 (최대 10)
    - 최악의 경우 문자열에서 가능한 모든 조합을 생성할 수 있음
    - 각 문자열에서 가능한 조합의 수는 mCk (최대 10C5 = 252)

 for(let i = 0; i < orders.length; i++)
    - 각 주문에서 course 길이만큼 반복 : O(n * k)
    - combi 함수 호출로 인한 추가 복잡도 : O(n * k * mCk)
    - 최대 n = 20, k = 10이므로 상수에 가까운 성능

 Object.entries(mix) : O(p)
    - p는 mix 객체의 크기, 즉 조합의 개수
    - mix 객체에 저장된 조합을 배열로 변환하는 데 걸리는 시간

 for(let i = 0; i < course.length; i++)
    - course 길이에 따라 mix 배열을 순회 : O(k * p)
    - 최대 k = 10, p는 생성된 조합의 수에 따라 다름

 result.sort() : O(r log r)
    - r은 최종 결과 배열의 크기
    - 최종 반환되는 조합들을 오름차순으로 정렬하는 시간

=> 전체 시간 복잡도 : O(n log n + n * k * mCk + k * p + r log r)이지만 
   제한 사항 덕분에 최대 입력 크기는 매우 작으므로 사실상 상수 시간에 가깝게 동작

   - n: orders 배열 크기 (최대 20)
   - m: 각 주문의 문자열 길이 (최대 10)
   - k: course 배열의 길이 (최대 10)
   - p: 생성된 조합의 수 (mix 객체 크기)
   - r: 최종 결과 배열 크기
*/

