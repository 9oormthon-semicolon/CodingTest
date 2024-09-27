const isMax = (arr, cur) => {
  for(let {curVal} of arr){
      if(curVal > cur) return false
  }
  return true
}

function solution(p, location) {
  const q = p.map((v,i) => {return {curVal: v, idx: i}})
  let order = 0
  
  while(q.length > 0){
      let { curVal,idx } = q.shift()
 
      if(!isMax(q, curVal))
          q.push({ curVal,idx })   
          
      else{
          order++
          if(idx === location) return order
      }
  }
  return -1
}


/*
  설명서 보고 구현하면 되는데 생각보다 어려운 문제
  실행 대기중인 큐를 꺼내서 대기중인 프로세스 우선순위와 비교
  만약에 우선순위 값이 내가 제일 크다면 프로세스 제거
  만약에 우선순위가 나보다 높은 프로세스가 있다면 다시 집어넣음
  무한반복
  
  우선 q를 계속 바꾸기 때문에 idx를 알기 쉽지 않으니 idx를 매핑함
  
  꺼낸 프로세스가 우선순위가 가장높은 프로세스인지 판별하는 함수 만듦
  
  판별하여 만약에 그 프로세스가 최고 우선순위를 가진다면 cnt++
  location과 같은수라면 return cnt
  
  p만큼 반복하고 또 하나의 수마다 isMax()에서 P만큼 반복하기 때문에
  
  O(N^2)같음
  
*/




//아.. 원형 큐로 풀었다가 망함

// function solution(priorities, location) {
//     let max = { startIdx: null, value: 0 }
//     let limit = priorities.length
//     let cur = 0
//     let cnt = 0

//     while(true){
//         //초기값
//         if (max.startIdx === null) {
//             max.startIdx = cur
//             max.value = priorities[cur]
//             cur = (cur + 1) % limit
//         }
//         //한 바퀴 순회함
//         else if (max.startIdx === cur) {
//             cnt++
//             //인덱스 맞으면 return
//             if (max.startIdx === location) return cnt
          
//             //지금 큐 뺴고 로그 
//             priorities.splice(cur, 1);
//             limit--
//             max = { startIdx: null, value: 0 }
//             if (cur >= limit) cur = 0
//         }
//         //값초과
//         else if (max.value < priorities[cur]) {
//             max.startIdx = cur;
//             max.value = priorities[cur];
//             cur = (cur + 1) % limit;
//         }
//         else cur = (cur + 1) % limit
      
//     }
// }