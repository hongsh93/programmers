function solution(scores) {
  var answer = 0;
  let firstScore = scores[0][0] + scores[0][1];
  if (
    scores.findIndex((el) => el[0] > scores[0][0] && el[1] > scores[0][1]) > -1
  )
    return -1;

  let scores_first_ordered = scores
    .filter((el) => el[0] + el[1] > firstScore)
    .slice()
    .sort((a, b) => b[0] - a[0]);
  if (scores_first_ordered.length === 0) return 1;
  let score_now = scores_first_ordered[0][0];
  let top_second_score = scores_first_ordered[0][1];
  let top_second_score_previous = -1;
  scores_temp = scores_first_ordered.filter((el) => {
    if (el[0] !== score_now) {
      score_now = el[0];
      top_second_score_previous = Math.max(
        top_second_score,
        top_second_score_previous
      );
      top_second_score = -1;
    }
    if (el[1] > top_second_score) top_second_score = el[1];
    return el[1] >= top_second_score_previous;
  });
  answer = scores_temp.length + 1;

  return answer;
}
