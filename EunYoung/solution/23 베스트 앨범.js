// lv3..
function solution(genres, plays) {
  let maxPlay = 0;
  let maxIndex = -1;

  const result = genres.reduce((acc, genre, index) => {
    acc[index] = {
      genre: genre,
      plays: plays[index],
    };
    return acc;
  }, {});

  const genreTotals = {};
  Object.values(result).forEach((item) => {
    if (!genreTotals[item.genre]) {
      genreTotals[item.genre] = 0;
    }
    genreTotals[item.genre] += item.plays;
  });

  // 장르를 총 재생 횟수로 정렬
  const sortedGenres = Object.keys(genreTotals).sort(
    (a, b) => genreTotals[b] - genreTotals[a]
  );

  const answer = [];

  // 각 장르별로 최대 2개의 노래 선택
  sortedGenres.forEach((genre) => {
    const genreSongs = Object.entries(result)
      .filter(([_, item]) => item.genre === genre)
      .sort((a, b) => b[1].plays - a[1].plays);

    answer.push(parseInt(genreSongs[0][0]));
    if (genreSongs.length > 1) {
      answer.push(parseInt(genreSongs[1][0]));
    }
  });

  return answer;
}
