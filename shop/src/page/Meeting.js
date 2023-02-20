import { Container, Nav, Row, Col, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Meeting(props) {
  return (
    <div className="container">
      {props.meeting.map((item, idx) => {
        return (
          <div key={idx}>
            <Row>
              <Col md={4}>
                <img src={item.img_url} width="80%" alt="모임사진" />
              </Col>
              <Col md={8}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
                <p>{item.location}</p>
                <p>정원 {item.max_num}</p>
                <Button variant="danger">상세 조회</Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default Meeting;
