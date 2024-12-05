function solution(files) {
    
    // 정규식을 활용해 파일명을 나눔
    function splitFile(file) {
        const regex = /([a-zA-Z\-\.\s]+)(\d{1,5})(.*)/;
        const match = file.match(regex);
        if (match) {
            const [_, header, number, footer] = match;
            return {
                head: header.toLowerCase(),
                number: parseInt(number, 10),
                originalIndex: files.indexOf(file)
            };
        }
        return { head: file.toLowerCase(), number: 0, originalIndex: files.indexOf(file) };
    }

    // 파일 정렬
    return files.sort((a, b) => {
        const fileA = splitFile(a), fileB = splitFile(b);

        if (fileA.head < fileB.head) return -1;
        if (fileA.head > fileB.head) return 1;

        if (fileA.number < fileB.number) return -1;
        if (fileA.number > fileB.number) return 1;

        return fileA.originalIndex - fileB.originalIndex;
    });
}

const files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
console.log(solution(files1));

/*
sort 함수를 사용했기 때문에
시간복잡도 O(NlogN)
*/