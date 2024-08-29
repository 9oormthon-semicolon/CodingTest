process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0; i<b; i++){
        console.log('*'.repeat(a));
    }
});

//for문 이용해서 b번 반복하면서 각 줄에 a개의 별을 출력. repeat()을 사용하여 a개의 별을 생성함
//시간복잡도
//for문에서 b번 반복하고 각 반복에서 O(a) 시간이 걸림
//따라서 전체 루프의 시간복잡도는 O(b*a)
