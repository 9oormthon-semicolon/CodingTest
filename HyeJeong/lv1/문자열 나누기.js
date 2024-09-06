function solution(s) {
    let result = 0; //분해한 문자열의 개수 저장하는 변수
    let compare = s[0]; //첫 번째 문자가 기준이 됨
    let count = 0; //compare 개수
    let nonCompare = 0; //compare가 아닌 다른 글자의 개수
    
    for(let i = 0; i<s.length; i++){
        s[i] === compare ? count++ : nonCompare++;
        //현재 문자가 기준 문자와 같으면 count 증가 아니면 nonCompare 증가
        
        if(count === nonCompare){ //기준 문자와 기준 문자가 아닌 문자 개수가 같아지면
            result++; //분해한 문자열의 개수 증가
            if(i+1 < s.length){ //다음 문자가 있다면
                compare=s[i+1];
            }
            count =0;
            nonCompare=0;
        }
    }
    if(count !==0 || nonCompare !==0){ //for문을 다 돌았는데도 남은 문자가 있다면
        result++;
    }
    return result;
}

//시간복잡도
//문자열 s의 길이에 대해 반복함
//O(n)
