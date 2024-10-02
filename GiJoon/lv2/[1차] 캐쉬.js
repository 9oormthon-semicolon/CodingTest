function solution(cacheSize, cities) {
  let cnt = 0
  let cache = []

  cities.forEach(v => {
    //대소문자 상관없어서 전부 소문자로 변경
    const city = v.toLowerCase()

    //캐쉬에 없을 때
    if (!cache.includes(city)) {
        cache.push(city.toLowerCase())

        if(cache.length > cacheSize ) cache.shift()

        cnt += 5
    }

    //캐쉬에 있을 때
    else {
        const idx = cache.indexOf(v)

        if (idx !== cacheSize - 1) {
            cache.splice(cache.indexOf(city), 1)
            cache.push(city)
        }

        cnt += 1
    }

  })


  return cnt
}

/* 
  구현은 쉬운데 문제 이해가 어렵
  
  일단 LRU 제일 마지막에 사용된 값 제외
  
  
  FIFO로 구현하면 되는거 같아요
  캐쉬에 존재하는 도시가 아니면 삽입하고 5만큼의 시간을 사용합니다. 이때 캐쉬 크기를 넘는다면 마지막에 사용한 도시를 삭제합니다.
  
  캐쉬를 사용하면 순서를 바꾸고 1만큼의 시간을 사용합니다. 
  이를 그냥 push shift로 구현했읍니다.

  했다가 가운데 수가 히트 할 수 있다는 가능성 생각안하고 틀렸읍니다.
  splice로 변경
  
  cities만큼 반복문을 사용해서 시간복잡도는 O(N)입니다.
*/