import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Main from "./page/Main";
import Meeting from "./page/Meeting";
import Note from "./page/Note";
import MeetingItem from "./component/MeetingItem";

function App() {
  let [meeting] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            GoBook
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/meeting");
              }}
            >
              모임
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/note");
              }}
            >
              독서노트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/community");
              }}
            >
              커뮤니티
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        <Route path="/" element={<Main meeting={meeting} />} />
        <Route path="/meeting">
          <Route index element={<Meeting meeting={meeting} />} />{" "}
          <Route path="id" element={<MeetingItem meeting={meeting} />} />
        </Route>
        <Route path="/note" element={<Note />}>
          <Route path="mem" element={<div>독후감</div>} />
        </Route>
        <Route path="/community" element={<>커뮤니티</>} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫주문시 서비스</div>}></Route>
          <Route path="two" element={<div>쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}
export default App;
