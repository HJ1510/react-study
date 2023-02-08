export async function getReviews(serverOrder = "creatAt") {
  const query = `order=${serverOrder}`;
  const response = await fetch(
    `https://learn.codeit.kr/1580/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}
