// 문제 23 신고 결과 받기

function solution(id_list, report, k) {
    const reportedUser = {}; // 신고당한 유저
    const count = {}; // 메일을 받은 유저
    const answer = [];
    for (const r of report) {
        const [userId, reportedId] = r.split(' ');
        // 신고당한 기록이 없으면 추가
        if(reportedUser[reportedId] === undefined) reportedUser[reportedId] = new Set();
        reportedUser[reportedId].add(userId); // 신고한 사람의 아이디를 세트에 넣음
    }
    // 신고당한 유저별로 신고당한 횟수 계산
    for(const reportedId of Object.keys(reportedUser)) {
        if(reportedUser[reportedId].size >= k) { // 정지 기준에 있으면
            for(const uid of reportedUser[reportedId]) {
                count[uid] = (count[uid] || 0) + 1;
            }
        }
    }
    // 아이디별 메일 받은 횟수
    for(let i = 0; i < id_list.length; i++){
        answer.push(count[id_list[i]] || 0);
    }
    return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
console.log(solution(id_list, report, k));

/*
권장 시간 복잡도 O(N)
---
*/
