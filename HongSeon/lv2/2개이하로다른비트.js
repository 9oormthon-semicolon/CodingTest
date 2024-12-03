function solution(numbers) {
    const result = []

    numbers.forEach(number => {
        // 짝수일 경우 바로 +1한 값을 추가
        if (number % 2 === 0) {
            result.push(number + 1)
            return
        }

        // 2진수 문자열로 변환하고 앞에 '0' 추가
        let binary = '0' + number.toString(2)

        // 마지막으로 등장하는 '0'의 위치 찾기
        const zeroIdx = binary.lastIndexOf('0')

        // 문자열을 배열로 변환하여 '0'을 '1'로, 그 다음 비트를 '0'으로 변경
        binary = binary.split('')
        binary[zeroIdx] = '1'
        binary[zeroIdx + 1] = '0'

        // 배열을 다시 문자열로 합치고, 10진수로 변환하여 추가
        const decimal = parseInt(binary.join(''), 2)
        result.push(decimal)
    })

    return result
}

/* 시간 복잡도 
 - numbers.forEach : O(n)
    - number.toString(2) : O(k)
    * k는 비트길이

 => 전체 시간 복잡도 : O(n * k)
*/
