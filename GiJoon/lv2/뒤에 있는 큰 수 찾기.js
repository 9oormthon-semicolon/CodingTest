function solution(nums) { 
    
  const arr = []
  const MAX = nums.length 
  const result = [...nums].fill(-1)
  
  for (let i = 0; i < MAX; i++) {
      while (arr.length > 0 && nums[arr[arr.length - 1]] < nums[i]) {
          result[arr.pop()] = nums[i]
      }
      arr.push(i)
      
  }
  return result
}

// 제목과 동일하게 풀면 됨
// 근데 뒤에 현재 숫자보다 큰 숫자 없으면 -1 반환 

/*
  function solution(numbers) { 
      const MAX = numbers.length
  
      return numbers.map((cur,idx)=>{
          for(let i = idx + 1; i < MAX; i++){
              if(cur < numbers[i]) return numbers[i]
          }
          return -1   
      })
  } 시간 초과 -_- O(N^2)

  효율성 박살나서 스택으로 바꿈
  
  순차적으로 현재 인덱스를 스택에 추가하고
  현재 값이 스택의 마지막 인덱스보다 크다면 현재 값을 저장한 인덱스로 바꿔주는 방식인데
  위에 방식을 반복해서 해결
  
  O(N)
*/
