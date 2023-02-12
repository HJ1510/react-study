const BASE_URL = "https://learn.codeit.kr/4246";

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);
  if (!response.ok) {
    throw new Error("실패하였습니다");
  }
  const body = await response.json();
  return body;
}

export async function createReviews(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("실패하였습니다");
  }
  const body = await response.json();
  return body;
}
