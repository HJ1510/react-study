import { Container, Nav, Row, Col, Button } from "react-bootstrap";

function MeetingItem(props) {
  return (
    <>
      <h4>모임상세</h4>
      <div>
        <Row>
          <Col md={4}>
            <img src={props.meeting[0].img_url} width="80%" alt="모임사진" />
          </Col>
          <Col md={8}>
            <h5>{props.meeting[0].title}</h5>
            <p>{props.meeting[0].content}</p>
            <p>{props.meeting[0].location}</p>
            <p>정원 {props.meeting[0].max_num}</p>
            <Button variant="danger">상세 조회</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MeetingItem;
