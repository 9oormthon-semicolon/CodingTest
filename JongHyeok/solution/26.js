// 문제 25 트리 순회

function preorder(nodes, idx){
    
    if(idx < nodes.length){ // idx가 노드 배열의 길이보다 작을 때 
        let ret = `${nodes[idx]}`; // 루트노드 > 왼쪽 > 오른쪽 ...
        ret += preorder(nodes, 2 * idx + 1);
        ret += preorder(nodes, 2 * idx + 2);
        return ret;
    }
    return ""; // idx가 노드 배열 길이보다 클 때
}
function inorder (nodes, idx){ // 왼쪽부터
    if(idx < nodes.length) {
        let ret = inorder(nodes, 2 * idx + 1);
        ret += `${nodes[idx]}`;
        ret += inorder(nodes, 2 * idx + 2);
        return ret;
    }
    return "";
}

function postorder(nodes, idx){ //오른쪽부터
    if(idx < nodes.length) {
        let ret = postorder(nodes, 2 * idx + 1);
        ret += postorder(nodes, 2 * idx + 2);
        ret += `${nodes[idx]}`;
        return ret;
    }
    return "";
}
function solution(nodes) {
    return [
        preorder(nodes, 0).trim(),
        inorder(nodes, 0).trim(),
        postorder(nodes, 0).trim(),
    ];
}

const nodes = [1,2,3,4,5,6,7];
console.log(solution(nodes));

/*
권장 시간 복잡도 O(N)
---
*/
