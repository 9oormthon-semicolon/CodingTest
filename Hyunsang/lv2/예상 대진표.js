function solution(n, a, b) { 
    let round = 1; // 라운드 카운터를 1로 초기화

    while (true) { 
        a = Math.ceil(a / 2); // a 참가자의 다음 라운드 번호를 구함
        b = Math.ceil(b / 2); // b 참가자의 다음 라운드 번호를 구함

        if (a === b) { // 두 참가자의 번호가 같아지면, 즉 서로 만나면
            break; 
        }

        round++; // 라운드 수를 1 증가
    }

    return round; 
}

// 시간복잡도: O(logn)