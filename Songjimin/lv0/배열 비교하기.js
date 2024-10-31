function solution(arr1, arr2) {
    // 배열의 길이 비교
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    } else {
        // 길이 같을 때 원소의 합을 비교
        const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
        
        if (sum1 > sum2) {
            return 1;
        } else if (sum1 < sum2) {
            return -1;
        } else {
            return 0;
        }
    }
}
