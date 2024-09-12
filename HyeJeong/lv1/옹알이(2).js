function solution(babbling) {
    const words = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    
    for (let babble of babbling) {
        //유효성 검사
        let canSpeak = true; //현재 bubble이 유효한 옹알이인지 여부를 나타냄
        let prevWord = ''; //마지막으로 사용된 단어를 저장하는 변수
        
        while (babble.length > 0 && canSpeak) {
            canSpeak = false; //옹알이 단어를 찾지 못한 상태
            for (let word of words) {
                if (babble.startsWith(word) && word !== prevWord) {
                    //babble이 word로 시작하고 preWord랑 다르면
                    babble = babble.slice(word.length); //babble에서 해당 단어 제거
                    prevWord = word; //이전 단어를 현재 단어로 업데이트
                    canSpeak = true; //유효한 옹알이르 찾았음
                    break;
                }
            }
        }
        
        if (babble.length === 0) { //babble의 길이가 0이 되면 모든 단어가 다 사용되었다는 의미이므로 횟수 증가
            count++;
        }
    }
    
    return count;
}

//시간복잡도
//for문 - babbling 배열의 길이를 n이라고 하면 n번 반복
//while문 - babble의 길이를 m번 반복
//O(n*m)
