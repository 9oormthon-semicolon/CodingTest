// 문제 23 베스트 앨범

function solution(genres, plays) {
    let answer = [];
    const genresObj = {}, playObj = {};
    
    // 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i], play = plays[i]; // 변수 선언
        if (!(genre in genresObj)) {
            genresObj[genre] = [];
            playObj[genre] = 0;
        }
        genresObj[genre].push([i, play]);
        playObj[genre] += play;
    }

    // 총 재생 횟수가 많은 장르순으로 정렬
    const sortedGenres = Object.keys(playObj).sort((a, b) => {
        return playObj[b] - playObj[a];
    });

    // 각 장르 내에서 노래를 재생 횟수 순으로 2위까지
    for (const genre of sortedGenres) { // for...of 사용
        const sortedSongs = genresObj[genre].sort((a, b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
        });

        answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
    }

    return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));

/*
권장 시간 복잡도 O(NlogN)
---
*/

/*
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
*/