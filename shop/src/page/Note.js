import { Outlet } from "react-router-dom";

function Note() {
  return (
    <div>
      <h4>독서노트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default Note;
