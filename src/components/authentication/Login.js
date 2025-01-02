import { Container, Row, Col } from "react-bootstrap"
import DisplayListPost from "../post/DisplayLatestPost"

export default function Login({ SetIsLoggedIn }) {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <DisplayListPost></DisplayListPost>
                    </Col>
                    <Col xs={4}>
                        <DisplayListPost></DisplayListPost>
                    </Col>
                </Row>
            </Container>


        </>

    )
}