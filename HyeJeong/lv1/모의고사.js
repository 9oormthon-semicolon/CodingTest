function solution(answers) {
    var s1 =[1,2,3,4,5];
    var s2 =[2,1,2,3,2,4,2,5];
    var s3=[3,3,1,1,2,2,4,4,5,5];
    var result =[0,0,0];
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === s1[i%s1.length])
            result[0]++;
        if(answers[i] === s2[i%s2.length])
            result[1]++;
        if(answers[i] === s3[i%s3.length])
            result[2]++;
    }
    
//answer에 각 문제의 정답이 있고 i는 현재 문제의 인덱스를 나타내고 answer[i]는 현재 문서의 정답을 가지고 있음
//i%s1.length를 하는 이유 => s1.length는 s1배열의 길이를 나타냄, i%s1.length는 현재 문제의 인데스 i를 s1의 길이로 나눈 나머지를 계산함. 이를 통해서 인덱스를 반복적으로 사용할 수 있음
    
    //최대 점수 찾기
    let max=0;
    for(let i=0; i<answers.length; i++){
        if(result[i] > max)
            max=result[i];
    }
    const arr = [];
    for(let i=0; i<answers.length; i++){
        if(max === result[i])
            arr.push(i+1);   //최대 점수를 가진 사람을 찾기 위해 for문을 통해서 뽑아냈는데 i는 0부터 시작하기 때문에 push할때 i+1을 해야함(이거 오류 찾느라 오래걸림ㅜ)
    }
    return arr.sort((a,b) => a-b); //마지막으로 가장 높은 점수를 받은 사람이 여럿일 경우 return값을 오름차순으로 정렬해야함
}

//정답에서 정답자 찾기 - O(n)
//최대 점수 찾기 - O(1)
//최대 점수자 찾기 - O(n)
//정렬 - O(n log n)
//전체 시간 복잡도 - O(n log n)
