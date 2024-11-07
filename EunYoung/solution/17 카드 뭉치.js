function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;
  for (let card of goal) {
    if (i < cards1.length && cards1[i] === card) {
      i++;
    } else if (j < cards2.length && cards2[j] === card) {
      j++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

// 반례
// console.log(
//   solution(
//     ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
//     ["string", "or", "integer"],
//     ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
//   )
// );

/**
 * N은 goal 배열의 길이
 *
 * 총 시간복잡도 O(n)
 */
