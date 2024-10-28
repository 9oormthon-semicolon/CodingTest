function solution(genres, plays) {
    // 1. 장르별로 총 재생 횟수와 노래 목록을 저장할 해시 생성
    const genreMap = {};

    genres.forEach((genre, index) => {
        const play = plays[index];

        // 장르가 처음 등장하면 초기화 {장르의 총 재생 횟수, 장르별 노래 목록}
        if (!genreMap[genre]) genreMap[genre] = {totalPlays: 0, songs: []};

        // 총 재생 횟수와 노래 추가
        genreMap[genre].totalPlays += play;
        genreMap[genre].songs.push({ index, play });
    });

    // 2. 각 장르별로 노래 목록을 정렬
    for (const genre in genreMap) {
        // 재생 횟수 내림차순, 재생 횟수가 같다면 인덱스 오름차순
        genreMap[genre].songs.sort((a, b) => {
            if (b.play === a.play) return a.index - b.index;
            return b.play - a.play;
        });
    }

    // 3. 장르를 총 재생 횟수 기준으로 정렬
    const sortedGenres = Object.values(genreMap).sort((a, b) => b.totalPlays - a.totalPlays);
   
    // 4. 정렬된 장르에서 최대 두 곡씩 추출하여 결과 배열 생성
    const result = [];
    sortedGenres.forEach(genre => {
        // 최대 두 곡 선택
        genre.songs.slice(0, 2).forEach(song => result.push(song.index));
    });

    return result;
}

/*
O(N) (데이터 초기화 및 저장)
O(G × M log M) (장르별 노래 정렬)
O(G log G) (장르 정렬)
O(G) (결과 배열 생성)

전체 시간 복잡도 : O(N log N)
*/