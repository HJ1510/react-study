import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (input) => {
    setTitle(input.target.value);
  };

  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault(): 기본 동작 막는 함수
    console.log({
      title,
      rating,
      content,
    });
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input value={title} placeholder="title" onChange={handleTitleChange} />
      <input
        type="number"
        value={rating}
        placeholder="rating"
        onChange={handleRatingChange}
      />
      <textarea
        value={content}
        placeholder="content"
        onChange={handleContentChange}
      />
      <button type="sumbit">확인</button>{" "}
      {/** type="sumbit" -> onSubmit 이벤트 발생 */}
    </form>
  );
}

export default ReviewForm;
