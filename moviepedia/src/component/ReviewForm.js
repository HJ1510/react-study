import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault(): 기본 동작 막는 함수
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input
        name="title"
        value={values.title}
        placeholder="title"
        onChange={handleChange}
      />
      <input
        name="rating"
        type="number"
        value={values.rating}
        placeholder="rating"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        placeholder="content"
        onChange={handleChange}
      />
      <button type="sumbit">확인</button>{" "}
      {/** type="sumbit" -> onSubmit 이벤트 발생 */}
    </form>
  );
}

export default ReviewForm;
