/* 문제 설명
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

제한사항
5 ≤ num_list의 길이 ≤ 50
-9 ≤ num_list의 원소 ≤ 9
입출력 예
num_list	result
[4, 2, 6, 1, 7, 6]	17
[-1, 2, 5, 6, 3]	8 */

function solution(num_list) {
  let odd_sum = 0;
  let even_sum = 0;

  for (let index = 0; index < num_list.length; index++) {
    if (index % 2 === 0) odd_sum += num_list[index];
    else even_sum += num_list[index];
  }

  return Math.max(odd_sum, even_sum);
}

console.log(solution([4, 2, 6, 1, 7, 6], 17));
