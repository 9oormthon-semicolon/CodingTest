function solution(numbers) {
    const set = new Set();
    
    //get소수
    const isFrime = (num) => {
        if (num == 0 || num == 1) return false;
        if (num == 2 || num == 3) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    //순서 있는 조합 (현재),(남은 값)
    (function getCombi (cur, save) {
        if(cur.length > 0) set.add(Number(cur))
        
        if(save.length <= 0) return
        
        for (let i = 0; i < save.length; i++) {
            getCombi(cur + save[i], save.slice(0, i) + save.slice(i + 1)); 
        }
        
    })("", numbers);
    
    
    //소수만 추출
    return [...set].reduce((acc, v) => {
        if(!isFrime(v)) return acc;
        
        return ++acc;
        
    }, 0);
}
/*
    모든 조합을 구하고, 그 값들 중 소수 갯수만 세서 문제를 풀었습니다.
    
    모든 조합 구하기 N!
    뽑은 조합에서 소수 판별하기 Math.sqrt(N)!
    
    O(N! + Math.sqrt(N)!)
*/

