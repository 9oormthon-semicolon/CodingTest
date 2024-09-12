function solution(arr1, arr2) {
    return arr1.map((item,idx)=>item.map((item_,idx_)=>item_+arr2[idx][idx_]))
}

// arr1 과 arr2의 만큼 반복 작업하므로
// O(n*m)