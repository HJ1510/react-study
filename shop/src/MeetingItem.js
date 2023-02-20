import data from "./data";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

function MeetingItem() {
  let [meeting] = useState(data);

  return (
    <>
      {meeting.map((item, idx) => {
        return (
          <Col md={4} key={idx}>
            <img src={item.img_url} height="6%" />
            <h5>모임명 {item.title}</h5>
            <p>설명 {item.content}</p>
            <p>지역 {item.location}</p>
            <p>정원 {item.max_num}</p>
          </Col>
        );
      })}
    </>
  );
}
