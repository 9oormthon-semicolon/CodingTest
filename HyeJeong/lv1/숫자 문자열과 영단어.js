function solution(s) {
    let answer = ''; //변환된 숫자를 저장할 문자열 변수
    let word=''; //현재 단어
    
    for(let char of s){ //입력 문자열을 문자 단위로 순회
        //현재 문자가 숫자면 result에 추가하고 다음 문자로 넘어감
        if(!isNaN(char)){
            answer += char;
            continue;
        }
        word +=char; //현재 문자가 문자일경우 숫자로 변환하는 과정을 거칠 예정

        //switch문을 사용하여 현재 단어를 숫자로 변환
        switch(word){
            case 'one':
                answer+='1';
                word=''; //숫자로 변환한 뒤 단어 초기화(다음 단어를 위해서)
                break;
                
            case 'two' :
                answer+='2';
                word='';
                break;
                
            case 'three' :
                answer+='3';
                word='';
                break;
                
            case 'four' :
                answer+='4';
                word='';
                break;
                
            case 'five' :
                answer+='5';
                word='';
                break;
                
            case 'six' :
                answer+='6';
                word='';
                break;
                
            case 'seven' :
                answer+='7';
                word='';
                break;
        
            case 'eight' :
                answer+='8';
                word='';
                break;
                
            case 'nine' :
                answer+='9';
                word='';
                break;
                                
            case 'zero' :
                answer+='0';
                word='';
                break;
        }
    }
    return Number(answer); //출력은 숫자로 해야하기에 Number함수를 사용하여 변환
}

//시간복잡도
//s 문자열의 각 원소를 순회하는 과정 - O(n) n은 문자열 길이
//현재 문자가 숫자인지 확인하는 과정 - O(1)
//현재 문자가 숫자가 아닌 경우 word에 문자 추가흔ㄴ 과정 - O(m) m은 word의 길이
//switch문 - O(1)
//결론 - O(n) n은 문자열 길이 
