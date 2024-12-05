// 문제 31 길 찾기 게임

class Node {
    constructor(info, num, left = null, right = null){
        this.info = info;
        this.num = num;
        this.left = left;
        this.right = right;
    }
    hasLeft() {
        return this.left !== null;
    }
    hasRight() {
        return this.right!== null;
    }
}
// 이진 트리 생성 함수
function makeBT(nodeinfo){
    const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1);
    nodes.sort((a,b) => {
        const [ax, ay] = nodeinfo[a - 1];
        const [bx, by] = nodeinfo[b - 1];
        return ay === by ? ax - bx : by - ay;
    });

    let root = null;
    for (const node of nodes) {
        if (!root) root = new Node(nodeinfo[node -1], node);
        else {
            let parent = root;
            const newNode = new Node(nodeinfo[node - 1], node);
            while (true) {
                if (newNode.info[0] < parent.info[0]){
                    if (parent.hasLeft()) {
                        parent = parent.left;
                        continue;
                    }
                    parent.left = newNode;
                    break;
                } else {
                    if (parent.hasRight()) {
                        parent = parent.right;
                        continue;
                    }
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
    return root;
}
// 전위 순회 함수
function preOrder (root, answer) {
    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        if (!node) continue;
        answer[0].push(node.num);
        stack.push(node.right);
        stack.push(node.left);
    }
}
// 후위 순회 함수
function postOrder(root, answer) {
    const stack = [[root, false]];
    while(stack.length) {
        const [node, visited] = stack.pop();
        if (!node) continue;
        if (visited) answer[1].push(node.num);
        else {
            stack.push([node, true]);
            stack.push([node.right, false]);
            stack.push([node.left, false]);
        }
    }
}
function solution(nodeinfo) {
    const answer = [[], []];
    const root = makeBT(nodeinfo);
    preOrder(root, answer);
    postOrder(root, answer);
    return answer;
}

const nodeinfo = [[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]]

console.log(solution(nodeinfo));
/*
권장 시간 복잡도 O(N²)
---
*/
