function solution(genres, plays) {
    let answer = [];
    let genreList = new Map();

    genres.forEach((genre, idx) => {
        if (!genreList.has(genre)) genreList.set(genre, { playlist: [], totalplays: plays[idx] });
        // 해당 장르가 없다면 새롭게 추가
        else genreList.get(genre).totalplays += plays[idx];
        // 있다면 추가되어 있는 기존 장르에 
        genreList.get(genre).playlist.push([idx, plays[idx]]); // 데이터 넣기
    });

    let sortedGenreList = Array.from(genreList).sort((a, b) => b[1].totalplays - a[1].totalplays);
    // 총 재생횟수로 정렬
    sortedGenreList.forEach(([_, data]) => {
        data.playlist.sort((a, b) => b[1] - a[1]); // 해당 장르에서 재생횟수로 정렬
        for (let i = 0; i < Math.min(2, data.playlist.length); i++) { // 상위 2곡 (1곡만 있을 경우, 1곡만)
            answer.push(data.playlist[i][0]); // 정답에 고유번호 추가
        }
    });
    return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

/*
모든 곡의 개수 n에 대해서 map에 추가하고 (시간복잡도 O(n))
sort함수로 정렬합니다. (시간복잡도 O(nlogn))
전체 시간복잡도 O(nlogn)
*/
