class Picks {
    constructor(dia, iron, stone) {
        this.dia = dia;
        this.iron = iron;
        this.stone = stone;
    }
    
    compute(v) {
        const { diamond = 0, iron = 0, stone = 0 } = v;
        return diamond * this.dia + iron * this.iron + stone * this.stone;
    }
}

function solution(picks, minerals) {
    let answer = 0;
    let j = -1;
    const Obj = [];
    const limit = picks.reduce((a, b) => a + b) * 5; 
    const len = Math.min(limit, minerals.length); //곡갱이를 다 소모 했을 때 보다 광물이 더 많으면 곡갱이 최대 사용 횟수 반환
    
    const PICKS = [
        new Picks(1, 1, 1),
        new Picks(5, 1, 1),   
        new Picks(25, 5, 1) 
    ];

    //객체형으로 5단위로 나눔
    for (let i = 0; i < len; i++) {
        if (i % 5 === 0) { 
            Obj.push({diamond:0, iron:0, stone:0}); 
            j++; 
        }
        
        Obj[j][minerals[i]] += 1
        
    }

    //광물 기준 정렬
    Obj.sort((a, b) => {
        if (a.diamond !== b.diamond) return b.diamond - a.diamond; 
        if (a.iron !== b.iron) return b.iron - a.iron;             
        return b.stone - a.stone;                                
    });


    let p = 0;
    //피로도 계산
    while (Obj.length > 0 && p < 3) {
        //다 쓴 괭이 스킵
        while (p < 3 && picks[p] <= 0) p++;
        
        if (p >= 3) break;
        
        const v = Obj.shift(); 
        answer += PICKS[p].compute(v); 
        picks[p]--; 
    }

    return answer;
}


/*
    5단위로 끊어서 괭물을 캐니, 5단위로 묶은 묶음 중 
    다이아가 제일 많은 묶음을 우선 가장 좋은 곡갱이로 캐도록 구현했습니다.
    
    O(N log N)
*/
