function solution(nums) {
    // Set 객체는 중복된 값을 허용하지 않으므로,
    // nums 배열에서 중복을 제거하여 고유한 값의 수를 셉니다.
    // new Set(nums) 생성자는 O(n) 시간 복잡도를 가집니다.
    // 여기서 n은 nums 배열의 길이입니다.
    const uniqueCount = new Set(nums).size;
    
    // nums.length / 2는 배열 길이의 절반을 계산합니다.
    // 이 연산은 O(1) 시간 복잡도를 가집니다.
    
    // Math.min 함수는 두 개의 값 중 작은 값을 반환합니다.
    // 이 연산은 O(1) 시간 복잡도를 가집니다.
    return Math.min(uniqueCount, nums.length / 2);
}

/* 이 코드는 전체적으로 O(n) 시간 복잡도를 가집니다.
    이는 Set 객체를 생성하고 중복 제거하는 과정에서의 시간 복잡도에 의해 결정됩니다.
    그 외의 연산은 상수 시간 내에 수행되므로 전체 시간 복잡도는 O(n) 입니다. */
