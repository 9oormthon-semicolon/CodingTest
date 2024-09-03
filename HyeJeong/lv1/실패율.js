function solution(N, stages) {
    const count = new Array(N + 1).fill(0); //1부터 N까지의 스테이지에 도달한 사용자 수를 저장

    for(const stage of stages){ //사용자들의 각각의 스테이지를 확인하는 과정
        count[stage]++; // 현재 스테이지에 있는 사용자 수를 증가시킴
    }
    const result = []; //실패율 배열
    
    for(let i=1; i<=N; i++){
        if(stages.length === 0){ //실패율이 0일때
            result.push([i,0]); 
        }
        else{
            const resultRate = count[i] / stages.length; //실패율 계산
            result.push([i, resultRate]); //스테이지 번호랑 실패율 저장
        }
        stages.length -= count[i]; //현재 스테이지에서의 사용자 수를 전체 수에서 빼야함
    }
    result.sort((a,b) => { //실패율 내림차순으로 정렬
        if(b[1] === a[1]){
            return a[0] - b[0]; //실패율이 같으면 스테이지 번호로 정렬
        }
        return b[1] - a[1]; //내림차순
    });
    return result.map(item => item[0]); //스테이지 번호를 출력
}

//시간복잡도
//사용자들의 각 스테이지를 확인하는 과정 - O(M) (M은 stages 배열 길이)
//실패율 계산 - O(N) (N번 반복)
//정렬 - O(N log N) (정렬은 배열의 크기만큼 수행)
//스테이지 번호 반환하는 과정 - O(N) (N번 반복)
//결과 : O(M + N log N)
