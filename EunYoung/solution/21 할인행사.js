function solution(want, number, discount) {
  const wantedItems = {};
  want.forEach((item, index) => {
    wantedItems[item] = number[index];
  });

  let count = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const itemCount = {};

    // 10일 동안의 할인 항목 카운트
    for (let j = i; j < i + 10; j++) {
      itemCount[discount[j]] = (itemCount[discount[j]] || 0) + 1;
    }

    // 원하는 항목과 수량 비교
    if (want.every((item) => wantedItems[item] <= (itemCount[item] || 0))) {
      count++;
    }
  }

  return count;
}
