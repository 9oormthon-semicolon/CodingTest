
function solution(files) {
    const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/
    let dict = []
    files.forEach((entry, idx) => {
        let [fn, head, num] = entry.match(re)
        dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
    })

    return dict.sort((a, b) => {
        if (a.head > b.head) return  1
        if (a.head < b.head) return -1
        if (a.num > b.num) return  1
        if (a.num < b.num) return -1
        return a.idx - b.idx
    }).map(e => e.fn)
}

/*

    파일이름 / 숫자 / 기타로 나누고 
    이름 기준과 숫자기준으로 정렬 우선순위를 나누어 정렬하여 해결했습니다.
    
    O(N log N)
*/