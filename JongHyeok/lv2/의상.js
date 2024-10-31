function solution(clothes) {
    const clothesMap = new Map();
    let answer = 1;
    console.log(clothesMap);
    clothes.forEach(arr => clothesMap.has(arr[1]) ? clothesMap.set(arr[1], clothesMap.get(arr[1]) + 1) : clothesMap.set(arr[1], 1));
    // 의상의 종류가 이미 있으면 방법 조합 추가, 없으면 해당 종류 추가
    clothesMap.forEach((count) => answer *= (count + 1));
    // 조합의 수 구하기
    return answer - 1; // 아무것도 입지 않은 경우 빼기
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));

/*
clothes 배열의 길이 n일 때 시간복잡도는 O(N)
*/