function solution(n, lost, reserve) {
    let lost_student = lost.filter(v => !reserve.includes(v)).sort(); // 여벌 체육복이 없는 사람 중 도난 당한 사람
    let reserve_student = reserve.filter(v => !lost.includes(v)).sort(); // 여벌 체육복이 있는 사람 중 도난 당하지 않은 사람
    // 여벌 체육복을 가져온 사람이 도난 당할 경우, 그 사람이 소유한 체육복은 0
    for (let i = 0; i < reserve_student.length; i++) {
        if (lost_student.includes(reserve_student[i] - 1)) { // 앞자리 친구가 체육복이 없을 때
            lost_student = lost_student.filter(v => v !== reserve_student[i] - 1);
        } else if (lost_student.includes(reserve_student[i] + 1)) { // 뒷자리 친구가 체육복이 없을 때
            lost_student = lost_student.filter(v => v !== reserve_student[i] + 1);
        }
    }
    return n - lost_student.length;
}

const n = 5;
const lost = [2,4]
const reserve = [1,3,5];
console.log(solution(n, lost, reserve));
/*
여벌 옷이 있는 친구들을 순회하며 주변 친구들에게 체육복을 나눠준다.
잃어버린 친구와 여벌 옷이 있는 친구 리스트를 sort로 정렬해주었습니다. (주위 친구에게만 빌려줄 수 있기에)

시간복잡도
자바스크립트의 sort 함수는 브라우저마다 알고리즘이 달라진다 합니다.
우리가 vscode에서 코드를 실행할 때 사용하는 NodeJs나 일반적으로 사용하는 Chrome에서는
TimSort를 사용하는데, 짧은 배열에서는 insertion sort를, 비교적 긴 배열에서는 Merge sort를 사용한다 합니다.
insertion sort의 경우 O(n)의 시간복잡도를 가지고, Merge sort의 경우 O(nlogn)의 시간복잡도를 가집니다.
따라서 sort 함수의 시간복잡도는 O(nlogn)입니다.

체육복을 빌려주는 과정은 for 반복문(시간복잡도 O(n)) 안에 include와 filter 함수(시간복잡도 O(n))가 있기 때문에
시간 복잡도는 O(n^2)입니다.

따라서 전체 코드의 시간복잡도는 O(n^2)입니다.*/
