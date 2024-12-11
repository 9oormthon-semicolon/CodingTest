function solution(want, number, discount) {
    const key = want.reduce((obj, v, idx) => { obj[v] = idx; return obj; }, {});
    const acc = Array(want.length).fill(0);
   
    const isTrue = () => {
        for (let i = 0; i < number.length; i++) {
            if (acc[i] !== number[i]) return false; 
        }
        return true; 
    };
    
    let result = 0;
    
    for (let i = 0; i < discount.length; i++) {
        const cur = discount[i];
        if (key[cur] !== undefined) acc[key[cur]]++; 

        if (i >= 10) {
            const remove = discount[i - 10];
            if (key[remove] !== undefined) acc[key[remove]]--; 
        }

        if (i >= 9 && isTrue()) result++;
    }

    return result;
}

/*
    want => obj(key)
    순서대로 세고 장바구니에 10개가 넘으면 맨처음 들어오는 물건 삭제해서 풀었습니다.
    O(m⋅n)

*/