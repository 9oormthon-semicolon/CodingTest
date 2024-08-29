process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ")
    const a = Number(n[0]), b = Number(n[1])
    
    
    for(let i = 0; i < b; i++){
        console.log(Array(a).fill('*').join(''))
    }
})
// b번 반복하면서 a만큼 별을 채우고 문자열로 출력
// 시간 복잡도 : O(a*b)

