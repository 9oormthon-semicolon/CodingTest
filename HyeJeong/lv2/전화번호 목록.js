function solution(phone_book) {
    var hashMap = new Map();
    
    for(let phone of phone_book){
        hashMap.set(phone, true);
    }
    
    for(let phone of phone_book){
        for(let i=1; i<phone.length; i++){
            let prefix = phone.substring(0,i);
            if(hashMap.has(prefix)){
                return false;
            }
        }
    }
    return true;
}

/*
모든 전화번호를 해시맵에 저장함 키는 전화번호이고 값은 true
각 전화번호에 대해 가능한 모든 접두러를 확인하고
만약 어떤 접두어가 해시맵에 존재한다면 번호가 다른 번호의 접두어라는 뜻이므로 false
모든 번호를 확인한 후에도 접두어가 발견되지 않으면 true

시간복잡도 - O(n*l)
n은 전화번호의 개수, l은 가장 긴 전화번호의 길이
*/
