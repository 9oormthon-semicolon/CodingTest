function solution(babbling) {
    const pattern = ["aya", "ye", "woo", "ma"]
    
    return babbling.reduce((acc, cur) => {
        //패턴 전부 숫자로 변경
        const temp = pattern.reduce((t,v,idx) => {
            return t.split(v).join(`${idx}`)
        }, cur)
     
        //숫자로 변경 불가능하면 리턴
        if(isNaN(Number(temp))) return acc
        if(temp.length === 1) return acc + 1
        
        let prev = temp[0]
        for(let i = 1; i < temp.length; i++){
            //같은 숫자가 반복하면 리턴
            if(prev === temp[i])
                return acc
            prev = temp[i]
        }

        return acc + 1
    },0)
}

//머쓱이네 조카가 발음할 수 있는 단어는 
//연속으로 같은 문자가 나오면 안됨
//패턴을 전부 문자랑 차별되는 숫자로 바꾼 뒤

//값을 확인하고 중간에 문자가 섞여있으면 걍 acc return
//걸러진 값에 반복성을 확인함 반복되면 걍 acc return 

// 다른 숫자거나 길이가 1이면 acc += 1


//------------------------------------------------------
//temp 패턴은 4이므로 무시 split과 join만
// split 문자열 크기만큼 join 또한 마찬가지 문자열을 m이라 가정하면
// temp 작업은 O(m)
// 또 숫자만큼 반복하는데 이는 변환한 문자열의 길이만큼 반복 
// temp O(m)
// babbling의 배열 갯수 만큼 반복하니까 O(n)
// O(n) * O(m) 
// O(n*m)
// 시간복잡도가 맞는지 모르겠어요...