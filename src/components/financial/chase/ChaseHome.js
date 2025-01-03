import { Container, Row, Col } from 'react-bootstrap';
import TopNavigation from '../../navigation/TopNavigation';
import LeftNavigation from '../../navigation/left/LeftNavigation';
import ChaseRightNavigation from './navigation/ChaseRightNavigation';
// import Tabs from 'react-bootstrap/Tabs';
export default function ChaseHome() {
    return <>
        <Container fluid>
            <Row>
                <Col>
                    <TopNavigation></TopNavigation>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xs={1}>
                    <LeftNavigation></LeftNavigation>
                </Col>
                <Col>
                        <ChaseRightNavigation></ChaseRightNavigation>
                </Col>
            </Row>
        </Container>
    </>
}