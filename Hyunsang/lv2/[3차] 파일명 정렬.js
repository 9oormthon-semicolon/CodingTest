function solution(files) {
    // 파일명 분리 함수
    const parseFile = (file) => {
        const match = file.match(/^([a-zA-Z\s\-.]+)(\d{1,5})(.*)$/);
        const head = match[1];
        const number = match[2];
        const tail = match[3];
        return [head, number, tail];
    };

    // 정렬
    files.sort((a, b) => {
        const [headA, numberA] = parseFile(a);
        const [headB, numberB] = parseFile(b);

        // HEAD를 기준으로 정렬 (대소문자 무시)
        const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
        if (headCompare !== 0) return headCompare;

        // NUMBER를 기준으로 정렬 (숫자로 변환)
        const numA = parseInt(numberA, 10);
        const numB = parseInt(numberB, 10);
        if (numA !== numB) return numA - numB;

        // 입력 순서 유지
        return 0;
    });

    return files;
}

// L: 파일명 길이
// 시간복잡도: O(n log n x L)
