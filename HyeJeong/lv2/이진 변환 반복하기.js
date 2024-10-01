function solution(s) {
    let trans = 0;
    let remove = 0;
    
    while(s !== "1"){
        let len = s.length; 
        s = s.replace(/0/g, "");
        let newLength = s.length; 
        
        remove += len - newLength;
        s = newLength.toString(2);
        trans++;
    }
    return [trans, remove];
}

/*
변환 횟수 trans와 제거된 0의 개수 remove 선언
s가 1이 될때까지 while문 반복
현재 문자열 길이를 len에 저장하고 정규표현식을 사용하여 모든 0을 제거함
0이 제거된 후 newLength에 저장
제거된 0의 개수를 remove에 추가
newLength를 이진수 문자열로 변환해서 s에 저장한 후 횟수 증가


시간복잡도 - O(n log n)
졍규표현식으로 O(n) n은 문자열의 길이
이진 변환에서 O(log m) m은 변환할 숫자의 크기
*/
