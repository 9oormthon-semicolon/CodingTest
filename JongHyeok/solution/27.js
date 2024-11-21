// 문제 27 이진 탐색 트리 구현
class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if(!this.root) {
            this.root = new Node(key);
        } else {
            let curr = this.root;
            while(true){
                // 삽입하려는 값이 현재 노드의 값보다 작은 경우
                if(key < curr.val){
                    // 자식 노드로 이동
                    if(curr.left) curr = curr.left;
                    else {
                        curr.left = new Node(key);
                        break;
                    }
                } else {
                    if(curr.right) curr = curr.right;
                    else {
                        // 오른쪽 자식이 없는 경우 새로운 노드 추가
                        curr.right = new Node(key);
                        break;
                    }
                }
            }
        }
    }
    
    search(key) {
        let curr = this.root;
        while(curr && curr.val !== key){
            if(key < curr.val) curr = curr.left;
            else {
                curr = curr.right;
            }
        }
        return curr;
    }
}
function solution(list, searchList) {
    const bst = new BST();
    for (const key of list){
        bst.insert(key);
    }
    const result = [];
    for (const searchVal of searchList){
        if(bst.search(searchVal)) result.push(true);
        else result.push(false);
    }
    return result;
}

const list =[5,3,8,4,2,1,7,10];
const searchList = [1,2,5,6];
console.log(solution(list, searchList));

/*
권장 시간 복잡도 O(N²)
---
*/
