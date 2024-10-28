function solution(genres, plays) {
    var genreMap = {};
    var result = [];

    // 장르별 총 재생 횟수와 노래 정보 저장
    for (var i = 0; i < genres.length; i++) {
        var genre = genres[i];
        var play = plays[i];
        
        if (!genreMap[genre]) {
            genreMap[genre] = {
                total: 0,
                songs: []
            };
        }
        
        genreMap[genre].total += play;
        genreMap[genre].songs.push({play: play, index: i});
    }

    // 장르를 총 재생 횟수로 정렬
    var sortedGenres = [];
    for (var genre in genreMap) {
        sortedGenres.push({
            genre: genre,
            total: genreMap[genre].total
        });
    }
    sortedGenres.sort(function(a, b) {
        return b.total - a.total;
    });

    // 각 장르별로 노래 선택
    for (var i = 0; i < sortedGenres.length; i++) {
        var genre = sortedGenres[i].genre;
        var songs = genreMap[genre].songs;

        // 노래를 재생 횟수로 정렬
        songs.sort(function(a, b) {
            if (a.play === b.play) {
                return a.index - b.index;
            }
            return b.play - a.play;
        });

        // 상위 2개 노래 선택
        for (var j = 0; j < songs.length && j < 2; j++) {
            result.push(songs[j].index);
        }
    }

    return result;
}

/*
genreMap 객체를 생성하여 각 장르별 정보를 저장
첫 번째 반복문에서 각 장르의 총 재생 횟수를 계산. 각 노래의 정보 (재생 횟수, 고유 번호)를 저장
장르를 총 재생 횟수로 정렬하기 위해 장르 정보를 배열로 변환
sort 함수를 사용하여 총 재생 횟수를 기준으로 정렬
정렬된 장르 순서대로 반복하면서 각 장르의 노래들을 재생 횟수와 고유 번호를 기준으로 정렬
상위 2개(또는 1개)의 노래를 선택하여 결과 배열에 추가

시간복잡도 - O(n log n)
O(n) + O(m log m) + O(m * n log n)
여기서 n은 전체 노래의 수이고, m은 고유한 장르의 수
일반적으로 m은 n보다 훨씬 작기 때문에 (m << n) O(n log n)가 됨.
*/
