function Search(node, graph, check) {
    check.add(node)
    let cnt = 1

    graph[node].forEach(v => {
        if (!check.has(v)) cnt += Search(v, graph, check)  
    })

    return cnt
}

function solution(n, wires) {
    let answer = Infinity
    
    
    const graph = {}
    
    wires.forEach(([start, end]) => {
        if (!graph[start]) graph[start] = [];
        if (!graph[end]) graph[end] = [];
        graph[start].push(end);
        graph[end].push(start);
    })

    
    wires.forEach(([start, end]) => {
    
        graph[start] = graph[start].filter(v => v != end)
        graph[end] = graph[end].filter(v => v != start)

        let check = new Set()
        let sum = []

        Object.keys(graph).forEach(key => {
            const tower = parseInt(key)
            if (!check.has(tower)) {
                const total = Search(tower, graph, check)
                sum.push(total)
            }
        })

        if (sum.length == 1) sum.push(n - sum[0])

        const c = Math.abs(sum[0] - sum[1])
        answer = Math.min(answer, c)

        graph[start].push(end)
        graph[end].push(start)
    })

    return answer
}

/*
    O(n^2)
*/