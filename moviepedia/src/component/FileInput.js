import { useState } from "react";

function FileInput() {
  const [value, setValue] = useState(); // 파일 객체를 담을 state
  const handleChange = (e) => {
    console.log(e.target.value);
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };
  return <input type="file" onChange={handleChange} />;
}
// error! 파일 인풋은 제어 컴포넌트로 만들 수 없음

export default FileInput;
