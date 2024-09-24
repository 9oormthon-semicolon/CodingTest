// Time to Second 시간을 초로 변경 (문자열 => 숫자)
const TtoS = (T) => {
    const [mm, ss] = T.split(":").map(Number)
    return mm * 60 + ss
}

function solution(video_len, pos, op_start, op_end, commands) {
    let Vlen = TtoS(video_len);
    let now = TtoS(pos);
    let OS = TtoS(op_start);
    let OE = TtoS(op_end);
    
    // command를 다 쓸때까지 반복
    while (commands.length > 0) {
        // 현재시간이 오프닝 구간에 있으면 오프닝 끝나는 위치로 이동
        if (OS <= now && now <= OE) now = OE
        
        // command 맨 앞부터 가져오기
        let command = commands.shift(); 
        
        // switch문 이용해서 next와 prev 처리
        switch (command) {
            case "next":
                // 비디오 길이를 넘지않게 min이용
                now = Math.min(now + 10, Vlen);
                break;
            case "prev":
                // 0보다 작은 경우 max를 이용해 0으로 처리
                now = Math.max(now - 10, 0);
                break;
        }
    }

    // command를 다 쓰고 현재 시간이 오프닝 구간에 존재하면 오프닝 끝나는 위치로 이동
    if (OS <= now && now <= OE) now = OE
    
    // now(초)를 시간으로 변경 (숫자 => 문자열)
    // padStart를 이용하여 문자열의 길이가 2보다 작으면 앞쪽에 '0'을 추가하여 문자열의 길이를 2를 맞춤
    let mm = Math.floor(now / 60).toString().padStart(2, "0")
    let ss = (now % 60).toString().padStart(2, "0")
    
    return `${mm}:${ss}`
}

/* 시간 복잡도
 - while (commands.length > 0) : commands.length에 따라 n번 반복 => O(n)
    - commands.shift() : shift()메서도의 시간 복잡도는 O(n) => O(n)
 
 => 전체 시간 복잡도 : O(n^2)

 ** for문을 이용했다면 O(n)이 나왔을 것 같음
*/
