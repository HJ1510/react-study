export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error("실패하였습니다");
  }
  const body = await response.json();
  return body;
}
