import { useState } from "react";

function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

function FoodForm() {
  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setValues((prevValue) => ({ ...prevValue, [name]: sanitize(type, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault(): 기본 동작 막는 함수
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.title} name="title" onChange={handleChange}></input>
      <input
        type="number"
        value={values.calorie}
        name="calorie"
        onChange={handleChange}
      ></input>
      <input
        value={values.content}
        name="content"
        onChange={handleChange}
      ></input>
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
