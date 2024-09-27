function solution(angle) {
    if(angle > 0 && angle < 90) {
        console.log("예각 입니다")
        return 1;
    } else if(angle === 90) {
        console.log("직각 입니다")
        return 2;
    } else if(angle > 90 && angle < 180) {
        console.log("둔각 입니다")
        return 3;
    } else if(angle === 180) {
        console.log("평각 입니다")
        return 4;
    }
}

console.log(solution(70));  // 예각 입니다 1
console.log(solution(90));  // 직각 입니다 2
console.log(solution(180));  // 평각 입니다 4

/*
  다른 사람의 풀이
  function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
  }
*/
