import { useState } from "react";

function TripSearchForm() {
  const [values, setValues] = useState({
    location: "Seoul",
    checkIn: "2022-01-01",
    checkOut: "2022-01-02",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>검색 시작하기</h1>
      <label htmlFor="location">위치</label>
      <input
        id="location"
        name="location"
        value={values.location}
        placeholder="어디로 여행가세요?"
        onChange={handleChange}
      />
      <label htmlFor="checkIn">체크인</label>
      <input
        id="checkIn"
        type="date"
        name="checkIn"
        value={values.checkIn}
        onChange={handleChange}
      />
      <label htmlFor="checkOut">체크아웃</label>
      <input
        id="checkOut"
        type="date"
        name="checkOut"
        value={values.checkOut}
        onChange={handleChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default TripSearchForm;
