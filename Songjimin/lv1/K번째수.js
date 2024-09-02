function solution(array, commands) {
    return commands.map(command => {
		    // i, j, k를 command에서 분리
        const [i, j, k] = command;      
        // array의 i번째부터 j번째까지 자름        
        const slicedArray = array.slice(i-1, j); 
        // 자른 배열을 정렬
        const sortedArray = slicedArray.sort((a, b) => a - b); 
        // k번째 요소를 반환
        return sortedArray[k-1];                
    });
}

/*
-알아야 할 문법-
배열 슬라이싱 (slice): 배열의 특정 부분을 잘라낼 때 사용됩니다.
배열 정렬 (sort): 배열의 원소를 순서대로 정렬합니다.
배열 인덱싱: 배열의 특정 위치에 있는 요소를 참조합니다.

map 메서드란?
정의: map은 자바스크립트 배열 메서드 중 하나로,
배열의 각 요소에 대해 주어진 함수를 호출하고 그 결과를 모아서 새로운 배열을 만듭니다.
구조: array.map(callback) 형태로 사용됩니다.
callback은 배열의 각 요소에 대해 실행되는 함수입니다.
이 함수는 현재 요소(element), 요소의 인덱스(index), 그리고 전체 배열(array)을 매개변수로 받을 수 있습니다.
map은 원래 배열을 변경하지 않고, 새로운 배열을 반환합니다.


전체 시간 복잡도 :
슬라이싱: O(j - i) - 배열의 일부를 자르는 작업.
정렬: O(n log n) - 잘라낸 부분 배열을 정렬하는 작업.
인덱싱: O(1) - 정렬된 배열에서 k번째 요소를 가져오는 작업.
따라서, 각 명령어에 대한 전체 시간 복잡도는 **O(n log n)**입니다.

이 명령어들을 모두 처리하는데, 최종 시간 복잡도는 **O(m * n log n)**이 됩니다.
여기서 m은 명령어의 수, n은 배열의 길이입니다.
*/
