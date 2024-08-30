function solution(n, lost, reserve) {
    const students = Array(n).fill(1);
    
    lost.forEach(l => students[l - 1]--);
    reserve.forEach(r => students[r - 1]++);

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) { 
            if (i > 0 && students[i - 1] === 2) { 
                students[i - 1]--;
                students[i]++;
            } else if (i < n - 1 && students[i + 1] === 2) { 
                students[i + 1]--;
                students[i]++;
            }
        }
    }

    return students.filter(status => status > 0).length;
}

//체육복 상태 배열을 초기화 시킨다
//도난당한 학생의 상태를 -1로 설정한다
//여벌 체육복을 가진 학생의 상태를 +1로
//여벌 체육복을 가진 학생이 도난당한 학생을 도와주기로 하였으니 
//조건문으로 체육복이 없는 학생이 1)앞 학생이 여벌 체육복을 가진 경우 2)뒤 학생이 여벌 체육복을 가진 경우
//체육수업을 들을 수 있는 학생 수를 계산하여 return

//시간복잡도 - O(n)

//배열을 초기화 - O(n)
//lost.forEach(l => students[l-1]--)은 잃어버린 학생 수만큼 반복함 - O(n)
//reserve.forEach(r => students[r-1]++)도 마찬가지로 - O(n)
//for반복문은 n만큼 반복되며 상수시간 수행 - O(n)
//students.filter(status=>status > 0)은 학생 수 만큼 필터링해서 - O(n)
