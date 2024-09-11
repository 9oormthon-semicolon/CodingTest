function solution(dartResult) {
    const scoreList = []; //각 라운드에서 얻은 점수 저장하는 배열
    let score = 0; //현재 라운드에서 계산된 점수
    
    for(let i=0; i<dartResult.length; i++){ //dartResult 문자열의 각 문자를 순차적으로 처리 
        if(dartResult[i]>='0' && dartResult[i]<='9'){ //0~9인 경우 다음 문자가 0인지 확인
            if(dartResult[i] === '1' && dartResult[i+1] === '0'){
                score=10; 
                i++
            }
            else{ //단일 점수를 parseInt로 변환
                score=parseInt(dartResult[i]);
            }
        }
        else if(dartResult[i]==='*' || dartResult[i]==='#'){ //옵션 처리
            if(dartResult[i]==='*'){ //마지막 점수 두배로 하고 이전 점수도 두배
                scoreList[scoreList.length-1]*=2;
                if(scoreList.length>1)
                    scoreList[scoreList.length-2]*=2;
                }
            else{ //마지막 점수를 마이너스로 조정
                scoreList[scoreList.length-1]*=-1;
            }
        }
        else{ //보너스 
            switch(dartResult[i]){
                case 'S':
                    scoreList.push(score); //점수 그대로 
                    break;
                case 'D':
                    scoreList.push(Math.pow(score,2)); //점수 제곱
                    break;
                case 'T':
                    scoreList.push(Math.pow(score,3)); //점수 세제곱
                    break;
            }
        }
    }
    return scoreList.reduce((sum, score) => sum + score, 0)
}

//시간복잡도
//각 문자를 한번씩 처리하므로 O(n) n은 dartResult 문자열 길이
