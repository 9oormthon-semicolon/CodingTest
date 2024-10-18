function solution(numbers) {
    // numbers 배열의 각 숫자를 문자열로 변환한 후, 
    // 두 숫자를 이어 붙인 결과를 비교하여 정렬 (이어 붙였을 때 더 큰 값을 우선순위로 정렬)
    let temp = numbers.map((i) => String(i)).sort((a, b) => (b + a) - (a + b))
    
    // 테스트 케이스11 반례 [0,0,0] => "0"
    if(temp[0] === "0") return "0"
    
    return temp.join("")
}

/* 시간 복잡도 
 - map : O(n)
 - sort : O(nlogn)
 - join : O(n)

 => 전체 시간 복잡도 : O(nlogn)
*/