import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault(): 기본 동작 막는 함수
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        name="title"
        value={values.title}
        placeholder="title"
        onChange={handleInputChange}
      />
      <input
        name="rating"
        type="number"
        value={values.rating}
        placeholder="rating"
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={values.content}
        placeholder="content"
        onChange={handleInputChange}
      />
      <button type="sumbit">확인</button>{" "}
      {/** type="sumbit" -> onSubmit 이벤트 발생 */}
    </form>
  );
}

export default ReviewForm;
