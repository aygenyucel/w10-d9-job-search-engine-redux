import { Col, Container, Row } from "react-bootstrap";

const Favourites = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2>FAVOURITE COMPANIES</h2>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          company name
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

//WE'LL USE USESELECTOR FOR READING FROM REDUX!
