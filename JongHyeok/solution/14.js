// 문제 14 표 편집
function solution(n,pos,cmd) {
    const deleted = []; // 삭제된 행의 인덱스를 저장하는 배열

    //각 행 위아래의 행의 인덱스를 저장하는 배열
    const up = [...new Array(n+2)].map((_, idx) => idx - 1);
    const down = [...new Array(n+1)].map((_, idx) => idx + 1);

    pos += 1; // 현재 위치
    for (const item of cmd) { // 커맨드 처리
        if(item[0] === "C"){
            deleted.push(pos);
            up[down[pos]] = up[pos];
            down[up[pos]] = down[pos];
            pos = n < down[pos] ? up[pos] : down[pos];
        } else if (item[0] === "Z"){
            const restore = deleted.pop();
            down[up[restore]] = restore;
            up[down[restore]] = restore;
        } else {
            const [action, num] = item.split(" ");
            if(action === "U") {
                for (let i = 0; i < num; i++){
                    pos = up[pos];
                }
            } else {
                for (let i = 0; i < num; i++){
                    pos = down[pos];
                }
            }
        }
    }
    // 삭제된 행의 위치에 X 그렇지 않은 위치에 O
    const answer = new Array(n).fill("0");
    for(const del of deleted) {
        answer[del - 1] = "X";
    }
    return answer.join("");
}

const n = 8, k = 2;
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
console.log(solution(n,k,cmd));

/*
권장 시간 복잡도 O(N)
---
명령어의 길이만큼 시간복잡도
*/