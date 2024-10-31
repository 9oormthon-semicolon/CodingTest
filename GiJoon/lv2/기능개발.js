function solution(progresses, speeds) {
    let day = 0
    //끝나는 날짜 추출
    const competeDay = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]))

    return competeDay.reduce((answer, compDay) => { 
        //배포한 날짜 이하의 날짜면 배포 갯수 +1
        if (day >= compDay) answer[answer.length - 1]++
        
        //기능 개발이 끝나는 날짜에 해당하면 push
         else { 
            day = compDay //오늘로 날짜 바꾸기
            answer.push(1) //새 기능 배포
        } 
               
        return answer
    }, [])
}


/*
    배포는 하루에 한 번 근데 기능이 완성된다면 한꺼번에 배포 가능
    
    개발 속도는 전부 다르기 때문에 남은 날짜를 구해주고,

    구한 날짜 기준으로 배포구현했습니다.
    
    이것도 O(N)
*/