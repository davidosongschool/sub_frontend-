import { Container, Row, Col } from "react-bootstrap";
import Numbercomponent from "./numbercomponent";

const Storenumbers = () => {
return (
    <div>
    <Container>
    <Row>
    <Col className="text-center" md={4}>
      <Numbercomponent />
    </Col>
    <Col className="text-center" md={4}>
      <Numbercomponent />
    </Col>
    <Col className="text-center" md={4}>
      <Numbercomponent />
    </Col>
    </Row>
    </Container>
    </div>
)

}

export default Storenumbers;