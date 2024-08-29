process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ")
    const a = Number(n[0]), b = Number(n[1])
    //b로 만큼 반복
    for(let i = 0; i < b; i++){
        //a를 만큼 배열을 만들고 전부 *로 채움 join으로 텍스트화
        console.log(Array(a).fill('*').join(''))
    }
})

//시간 복잡도 사용하는 반복문이 a,b에 비례하기에 O(a*b)