function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        // 소수 판별
        let isPrime = true;
        if (sum < 2) {
          isPrime = false;
        } else {
          for (let div = 2; div <= Math.sqrt(sum); div++) {
            if (sum % div === 0) {
              isPrime = false;
              break;
            }
          }
        }

        if (isPrime) {
          count++;
        }
      }
    }
  }

  return count;
}

//시간복잡도
// 최종 시간 복잡도: O(n^3 * √m)
// n은 입력 배열 nums의 길이
// m은 nums 배열에서 가능한 가장 큰 3개 숫자의 합
