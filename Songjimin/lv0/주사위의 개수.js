function solution(box, n) {
    // 가로 방향에 들어갈 수 있는 주사위 개수
    const widthCount = Math.floor(box[0] / n);
    // 세로 방향에 들어갈 수 있는 주사위 개수
    const lengthCount = Math.floor(box[1] / n);
    // 높이 방향에 들어갈 수 있는 주사위 개수
    const heightCount = Math.floor(box[2] / n);
    
    // 세 방향에서 들어갈 수 있는 주사위의 개수를 곱하여 반환
    return widthCount * lengthCount * heightCount;
}

/*
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}
*/
