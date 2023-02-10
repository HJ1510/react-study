import { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value); // 선택한 별점, 별점 미리보기
  const hadleSelect = (nextValue) => onChange(name, nextValue); // nextValue를 onChange함수에 name과 함께 전달
  const hadleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={hadleSelect}
      onHover={setRating} // 미리보기
      onMouseOut={hadleMouseOut} // 선택된 값
    />
  );
}

export default RatingInput;
