import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  // order값이 createdAt일땐 최신순 rating일때는 평점 높은 순으로 정렬

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
