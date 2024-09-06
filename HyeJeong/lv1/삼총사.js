function solution(number) {
    const result = []; //결과를 저장할 배열
    let answer =0; //삼총사된 횟수

    //i : 첫 번째 요소
    for(let i=0; i<number.length-2; i++){
        //j : 두번째 요소
        for(let j=i+1; j<number.length-1; j++){
            //k : 세번째 요소
            for(let k=j+1; k<number.length; k++){
                if(number[i] + number[j] + number[k] === 0){ //i,j,k의 합이 0인지 
                    answer++; //합이 0이라면 횟수 증가
                }
            }
        }
    }
    return answer;
}
/*
i=0이라면 arr[i]=-1이 되고
그 안에 j=1, arr[j]=0
k=2, arr[k]=1
k=3, arr[k]=2
.
.
.
j=2 arr[j]=1
k=3, arr[k]=2
.
.
i=1, arr[i]=0
이런 식으로 모든 조합을 확인하여 결과를 반환함
*/
  
//시간복잡도
//3개의 중접 반복문 - O(n^3)
