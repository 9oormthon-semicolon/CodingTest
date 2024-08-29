process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0; i<b; i++){
        let str = "";
        for(let j=0; j<a; j++){
            str = str + "*"
        } 
        console.log(str);
    }
});

// 반복문 2개 시간복잡도 O(n^2)