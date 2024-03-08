/* 문제 설명
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
입출력 예
num_list	result
[2, 1, 6]	[2, 1, 6, 5]
[5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10] */

function solution(num_list) {
  let length = num_list.length;
  let lastFirst = num_list[length - 1];
  let lastSecond = num_list[length - 2];

  if (lastFirst > lastSecond) return [...num_list, lastFirst - lastSecond];
  else return [...num_list, lastFirst * 2];
}
