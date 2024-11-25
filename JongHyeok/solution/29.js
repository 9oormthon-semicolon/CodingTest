// 문제 29 다단계 칫솔 판매
function solution(enroll, referral, seller, amount) {
    let parent = {}; // key: enroll의 노드, value: referral의 노드
    for(let i = 0; i < enroll.length; i++){
        parent[enroll[i]] = referral[i];
    }
    // total 오브젝트 생성 및 초기화
    let total = {};
    for(let name of enroll){
        total[name] = 0;
    }
    // seller 배열과 amount 배열을 이용하여 이익 분배
    for(let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let curName = seller[i];
    
    // 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
        while(money > 0 && curName != "-"){
            total[curName] += money - Math.floor(money / 10); //10% 제외
            curName = parent[curName];

            money = Math.floor(money / 10); // 10% 제외
        }
    }

    return enroll.map(name => total[name]);

}

const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
const seller = ["young", "john", "tod", "emily", "mary"];
const amount = [12, 4, 2, 5, 10];
console.log(solution(enroll, referral, seller, amount));

/*
권장 시간 복잡도 O(N*M)
---
*/
