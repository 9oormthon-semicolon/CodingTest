function solution(m, n, board) {
    let cnt = 0

    // board를 시계 방향으로 돌려서 자동으로 값이 내려가게함
     const BOARD = board.reverse().reduce((arr,v,idx)=> {
        for(let i = 0; i < v.length; i++) {
            if(!arr[i]) arr.push([])
            arr[i].push(v[i])
        }
        return arr
    },[])

    //2*2가 있는지 체크 + 탐색해서 CHECK에 메모
    const isTWOTWO = () => {
        let CHECK = Array.from({length: n}, () => Array(m).fill(false))
        let FOUND = false

        // 2*2 전부 탐색 값 같으면 true로 바꿔줌
        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < m-1; j++) {
                const twotwo = BOARD[i][j]
                if (twotwo && twotwo === BOARD[i][j + 1] && twotwo === BOARD[i + 1][j] && twotwo === BOARD[i + 1][j + 1]) {
                    CHECK[i][j] = true
                    CHECK[i][j + 1] = true
                    CHECK[i + 1][j] = true
                    CHECK[i + 1][j + 1] = true
                    FOUND = true //한 번이라도 지울 블록이 있음 true
                }
            }
        }
        return {FOUND,CHECK}
    }

    //CHECK 기반 true인 블록 제거 및 제거 개수 세기ㅏ
    const clearANDcount = (CHECK) => {    
        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if (CHECK[i][j] === true) {
                    BOARD[i][j] = null //블록 제거
                    cnt++ //없앤 개수세기
                }
            }
        }
        //null 전부 제거 블록 떨구기
        for(let i = 0; i < n; i++){
            BOARD[i] = BOARD[i].filter(v => v !== null)
        }
    }

    while(true){
        //찾으면 true 못찾으면 false, 2*2의 값을 찾음 
        const {FOUND,CHECK} = isTWOTWO()  
        if (!FOUND) break  //지울 블록이 없으면 종료

        clearANDcount(CHECK)  //블록 제거 및 개수 세긔
    }

    return cnt
}

/*
    게?임 구현 문제
    
    이어진 블록을 없앤 뒤에 테트리스처럼 블록이 떨어져 공간을 채우는 함수를 만들어서 풀면 되는 문제
    
    데이터를 없애고 내리는 작업 못할거 같아서 배열을 시계방향으로 90도 돌려서 풂
    
    isTWOTWO O(n * m)
    clearANDcount O(n * m)이라서
    
    gpt가 O((n * m)²)라네요 
    
    문제 넘나 어려워요  
*/