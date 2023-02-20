
import { Container, Nav, Row, Col } from "react-bootstrap";

function Main(Card, meeting) {
  return (
    <>
      <div className="main-img"></div>
      <Container>
        <Row>
          <Card meeting={meeting} />
        </Row>
      </Container>
    </>
  );
}

export default Main;
