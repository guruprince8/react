
import { Container, Row, Col } from "react-bootstrap"
import DisplayListPost from "../post/DisplayLatestPost"

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <DisplayListPost></DisplayListPost>
        </Col>
        <Col xs={4}>
          <DisplayListPost></DisplayListPost>
        </Col>
      </Row>
    </Container>

  )
}