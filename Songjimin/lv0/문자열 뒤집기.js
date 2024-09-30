function solution(my_string) {
    return my_string.split('').reverse().join('');
}

console.log(solution('jaron'));  // "noraj"
console.log(solution('bread'));  // "daerb"

/*
  다른사람의 문제풀이
  function solution(my_string) {
  	var answer = [...my_string].reverse().join("");
  	return answer;
  }
*/
