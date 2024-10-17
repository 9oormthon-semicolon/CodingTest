function solution(N, road, K) {
       
    const MAP = {} //그래프
    const save = Array(N + 1).fill(Infinity) //최솟값 저장 arr

    road.forEach(([cur, next, time]) => {
        if (!MAP[cur]) MAP[cur] = []
        if (!MAP[next]) MAP[next] = []
        MAP[cur].push({next, time})
        MAP[next].push({next:cur, time})
    }) 
    
    save[1] = 0
    const q = []
    q.push({next:1, time:0})

    while(q.length > 0) {
        const {next, time} = q.shift()

        if(time > save[next]) continue //저장된 시간비용 이하라면 계산안함

        MAP[next].forEach(v => {
            const T = time + v.time
            if(T < save[v.next]) { //시간 비용이 저장된 비용보다 작으면 값 교체
                save[v.next] = T
                q.push({next:v.next,time:T})
            }
        })
    }
    return save.filter(time => time <= K).length
}


/*
    가중치 있는 그래프 다익스트라 알고리즘? 

        const q = []
        q.push({next:1,time:0,save:new Set()})

        while(q.length > 0) {
            const {next, time, save} = q.shift()

            if (time <= K) result[next] = Math.min(result[next] || Infinity, time)

            if (save.has(next)) continue

            const newSave = new Set(save)
            newSave.add(next)

            MAP[next].forEach(v => {
                if (!newSave.has(v.next)) q.push({ next: v.next, time: v.time + time, save: newSave })
            })

        }
    
    시간초과 ㄴㅇㄱ
    
    set을 복사하고 넘겨주는 방식으로 풀었는데 시간이 오래걸리는 것 같아서 길의 최솟값을 저장해주는 arr로 교체
    
    set -> arr


    
*/