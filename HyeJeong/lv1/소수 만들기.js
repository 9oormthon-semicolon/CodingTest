function solution(nums) {
    const prime = (num) => {
        if(num<2)
            return false; //2보다 작으면 소수가 아니기 때문에
        for(let i =2; i<=Math.sqrt(num); i++){
            if(num%i === 0)
                return false; //또한 약수가 있으면 소수가 아님
        }
        return true;
    };
    let count = 0;

    //3개 숫자를 조합해 소수 찾는 과정
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(prime(sum)){
                    count++;
                }
            }
        }
    }
    return count;
}

//시간복잡도
//prime함수가 최악의 경우 O(√n)의 시간 복잡도를 가짐
//3중 반복문이라 O(n^3) - n은 배열의 길이
//전체 시간 복잡도는 O(n³ * √m)
//(시간복잡도는 정확하지 않은 것 같습니다..)
