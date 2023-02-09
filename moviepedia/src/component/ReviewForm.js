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

  return (
    <form className="ReviewForm">
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
    </form>
  );
}

export default ReviewForm;
