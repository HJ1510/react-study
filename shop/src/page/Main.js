import { Container, Nav, Row, Col } from "react-bootstrap";

function Main(props) {
  return (
    <>
      <div className="main-img"></div>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </>
  );
}

export default Main;
