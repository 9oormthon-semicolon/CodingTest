function solution(phone_number) {
    let char = "*".repeat(phone_number.length-4) 
    char += phone_number.slice(phone_number.length-4)
    return char
}
//phone-number - 4 길이만큼 *를 채운 뒤
//phone-number의 뒤에 네자리를 가져와서 더함

//O(phone_number)
//O(N)