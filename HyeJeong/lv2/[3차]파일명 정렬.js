function solution(files) {
  return files.sort((a, b) => {
    const [aHead, aNumber] = splitFileName(a);
    const [bHead, bNumber] = splitFileName(b);
    
    const headCompare = aHead.localeCompare(bHead);
    if (headCompare !== 0) return headCompare;
    
    return parseInt(aNumber) - parseInt(bNumber);
  });
}

function splitFileName(file) {
  const head = file.match(/^\D+/)[0].toLowerCase();
  const number = file.match(/\d+/)[0];
  return [head, number];
}

/*
solution 함수는 files 배열을 정렬함
splitFileName 함수는 파일명을 HEAD와 NUMBER 부분으로 나눔
HEAD: 숫자가 나오기 전까지의 문자열 (대소문자 구분 없음)
NUMBER: 처음 나오는 숫자 문자열
정렬 로직으로 HEAD를 먼저 비교 (대소문자 구분 없이)
HEAD가 같으면 NUMBER를 숫자로 변환하여 비교
HEAD와 NUMBER가 모두 같으면 원래 순서를 유지

시간복잡도 - O(n log n)
*/
