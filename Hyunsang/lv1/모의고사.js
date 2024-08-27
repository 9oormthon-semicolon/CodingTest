function solution(answers) {
    // 각 수포자들이 찍는 패턴을 배열로 정의합니다.
    let one = [1,2,3,4,5];
    let two = [ 2,1,2,3, 2,4,2,5]; 
    let three = [ 3,3 , 1,1 , 2,2, 4,4 , 5,5] // 3 -> 1 -> 2 -> 4 -> 5
    
     // 각 수포자들의 맞춘 정답 개수를 저장할 객체를 초기화합니다.
    let people = {
        1 : 0,
        2 : 0,
        3 : 0,
    }
    
    for ( let i = 0 ; i < answers.length ; i++ ) {
        //수포자 1의 정답비교
            if( answers[i] ===  one[i % one.length] ) {
                people[1]++
            }
       
        //수포자 2의 정답비교
            if( answers[i] === two[i % two.length] ) {
                people[2]++
            }
        //수포자 3의 정답비교
   
            if( answers[i] ===  three[i % three.length] ) {
                people[3]++
            }
        
    }
    
    // 가장 많은 정답을 맞춘 수포자(들)을 찾기
    let maxKeys = [];
    let maxValue = 0;
    
    for (const [key, value] of Object.entries(people)) {
         // 현재 값이 최대값보다 크다면, 최대값과 최대값을 가진 수포자 리스트를 업데이트
        if (value > maxValue) {
            maxValue = value;
            maxKeys = [key];

        // 현재 값이 최대값과 같다면, 해당 수포자를 리스트에 추가합니다.
        } else if (value === maxValue) {
            maxKeys.push(key);
        }
    }

    return maxKeys.map(Number);
    
}

/* 
코드 설명 :
1. 먼저 수포자 정답 찍는 패턴 방식 배열로 정의.
2. 답안지 answers를 순회하면서 수포자들이 해당 문제 정답 맞췄는지 확인.
3. 맞췄으면 people 객체에서 해당 수포자 정답개수 증가
4. 가장 많이 맞춘 수포자 찾기 위해 maxkeys 배열과 maxValue 정의
5. people객체 순회하면서 가장 많이 맞춘 수포자 찾기.
6. maxKeys 배열의 요소들이 문자열이므로 숫자로 변환해서 반환.


*/

/*
시간복잡도 :
answers 배열의 길이를 n이라고 할 때, for 루프는 n번 실행.
각 루프 내에서 수포자 3명의 정답을 비교하는데, 이는 O(1) 시간 복잡도를 가진다.
따라서 이 루프의 전체 시간 복잡도는 O(n)

마지막으로 people 객체를 순회하며 최대값을 찾는 부분은 수포자 3명에 대해 수행되므로,
상수 시간 O(3)에 해당합니다. 이 부분의 시간 복잡도는 O(1)로 간주된다.

결과적으로, 이 알고리즘의 총 시간 복잡도는 O(n)이다.
*/