process.stdin.setEncoding('utf8');
// 입력처리
process.stdin.on('data', data => {
    // 공백 구분
    const n = data.split(" ");
    // 별갯수, 행개수 저장
    const starCount = Number(n[0]), row = Number(n[1]);
    
    // 출력 처리
    for(let i = 0; i < row; i++){
        console.log("*".repeat(starCount))
    }
});

/* 시간복잡도 
    입력처리 => O(1)
    공백구분 => O(1)
    별갯수, 행개수 저장 => O(1)
    출력처리
    - row 만큼 반복
    - 반복마다 starCount길이의 문자열 출력

    row와 starCount에 비례하므로 => O(n*m)

    코드 전체 시간 복잡도 => O(n*m)
*/
