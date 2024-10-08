function solution(orders, course) {
    const memo = {}
    course.forEach(v => memo[v] = {}) //키 셋업
    
    //조합 추출
    const getCombi = (order) => { 
        order = order.split('').sort().join(''); //정렬 순서없는 조합을 구하기 위함
        
        (function func(menus, idx) {
            if (menus.length >= 2 && memo[menus.length]) //2개 이상 course 키가 있는 값만 연산
                memo[menus.length][menus] = (memo[menus.length][menus] || 0) + 1 //있으면 ++ 없으면 0삽입 후 ++

            for (let i = idx; i < order.length; i++) {
                func(menus + order[i], i + 1) 
            }
            
        })("",0);
    }
    
    orders.forEach(v => getCombi(v)) //조합 구함

    return Object.values(memo).reduce((arr,v) => { 
        const MAX = Math.max(...Object.values(v)) //제일 큰값 추출
        
        if(2 > MAX) return arr // 제일 큰 값이 최대 주문 갯수 2이하 캔슬
        
        Object.entries(v).forEach(([menu,cnt])=> { // MAX랑 같은 값 push
            if(cnt === MAX) arr.push(menu)
        })
        return arr
    },[]).sort()

}

/*
    주문할 때 가장 많이 함께 주문한 단품 메뉴들을 코스 요리로
    최소 2가지 이상 단품 메뉴로 구성
    2명이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함
    
    2 <= orders 중복X
    1 <=course <= 10 중복X
    결과 사전 순 정렬
    
    문제는 쉬운데 구현이 쉽지 않네요...
    
    course에 있는 메뉴 갯수만 세면 되기 때문에
    course를 키로 가진 객체를 이용해 구했습니다.
    
    course = [2,3,4]
    
    memo = {
        "2": {"AB","AC".....}
        "3": {"ABC","ABF".....}
        "4": {"ABCF","ACFG".....}
    }
    
    모든 조합을 구해야하는 것 같습니다.
    백트레킹 사용해서 모든 조합 구한 뒤에 object에 추가하고
    주문이 2번 이상인 조합만 추출해서 사전순 정렬하면 될 것 같습니다.
    
    라고 생각했는데 순서가 없는 조합이였네요 아.. ex) XYZ === ZYX === YXZ
    
    백 트레킹으로 다 구하고 sort하는 것보다
    그냥 sort하고 같은 값을 찾는게 더 효율적이므로 
    평범한 재귀로 개선한 뒤 순서없는 값들을 cnt했습니다.
    
    횟수를 전부 구한 후 각 최댓값을 구하고 최댓값과 일치하는 key를 추출해서 정렬해줬습니다.
    
    getCombi = O(M * 2^n)인데 n은 최대 10 M도 최대 20 
    조합을 구하는 시간복잡도는 사실 O(1)
    
    reduce(forEach)도 사실 제한된 상수로 인해 반복하는거니까
    시간복잡도는 O(1)
*/
