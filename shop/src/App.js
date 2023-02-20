import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

import Main from "./page/Main";
import Meeting from "./page/Meeting";

function App() {
  let [meeting] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GoBook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="meeting">모임</Nav.Link>
            <Nav.Link href="note">독서노트</Nav.Link>
            <Nav.Link href="community">커뮤니티</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-img"></div>
              <Container>
                <Row>
                  <Card meeting={meeting} />
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/meeting" element={<Meeting meeting={meeting} />} />
        <Route path="/note" element={<>독서노트</>} />
        <Route path="/community" element={<>커뮤니티</>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <>
      {props.meeting.map((item, idx) => {
        return (
          <Col md={4} key={idx}>
            <img src={item.img_url} height="6%" alt="모임사진" />
            <h5>{item.title}</h5>
            <p>{item.content}</p>
            <p>{item.location}</p>
            <p>정원 {item.max_num}</p>
          </Col>
        );
      })}
    </>
  );
}

export default App;
