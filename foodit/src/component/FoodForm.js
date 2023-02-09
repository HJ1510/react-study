import { useState } from "react";

function FoodForm() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCalorieChange = (e) => {
    const newCalorie = Number(e.target.value);
    setCalorie(newCalorie);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <input value={title} name="title" onChange={handleTitleChange}></input>
      <input
        type="number"
        value={calorie}
        name="calorie"
        onChange={handleCalorieChange}
      ></input>
      <input
        value={content}
        name="content"
        onChange={handleContentChange}
      ></input>
    </form>
  );
}

export default FoodForm;
