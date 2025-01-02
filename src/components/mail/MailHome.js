import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TopNavigation from '../navigation/TopNavigation';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import HooksPlay from "../../hooks/HooksPlay";
import Primary from "./Primary";
import Promotions from "./Promotions";
import Social from "./Social";
import Updates from "./Updates";
import ComposeMail from "./ComposeMail";
export default function MailHome() {
    return <>
        <Container fluid>
            <Row>
                <Col>
                    <TopNavigation></TopNavigation>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col xs={1}>
                    <i className="bi bi-list"></i>
                    Mail
                    <br />
                    <i className="bi bi-envelope-at-fill"></i>
                    Chat
                    <br />
                    <i className="bi bi-chat"></i> Chat<br />
                    <i className="bi bi-camera-video"> Meet </i>
                </Col>
                <Col xs={1}>
                    <div>
                        <ComposeMail></ComposeMail>
                     </div>
                    <div><i className="bi bi-inbox"></i> Inbox</div>
                    <div><i className="bi bi-eye-fill"></i> Starred</div>
                    <div><i className="bi bi-alarm"></i> Snoozed</div>
                    <div><i className="bi bi-alarm"></i> Important</div>
                    <div><i className="bi bi-alarm"></i> Sent</div>
                    <div><i className="bi bi-alarm"></i> Draft</div>
                    <div><i className="bi bi-alarm"></i> Scheduled</div>
                    <div><i className="bi bi-alarm"></i> All Mail</div>
                    <div><i className="bi bi-alarm"></i> Spam</div>
                    <div><i className="bi bi-alarm"></i> Trash</div>
                    <div><i className="bi bi-alarm"></i> Manage Labels</div>
                    <div><i className="bi bi-alarm"></i> Labels</div>


                </Col>
                <Col>
                    <Row className="mt-3 mb-3">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>&nbsp;
                            <i className="bi bi-question-circle"></i>&nbsp;
                            <i className="bi bi-gear"></i>&nbsp;
                            <i className="bi bi-three-dots"></i>
                        </Form>
                        
                    </Row>
                    <Tabs
                        defaultActiveKey="primary"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="primary" title="Primary">
                            <Primary />
                        </Tab>
                        <Tab eventKey="promotions" title="Promotions">
                            <Promotions></Promotions>
                        </Tab>
                        <Tab eventKey="social" title="Social">
                            <Social></Social>
                        </Tab>
                        <Tab eventKey="updates" title="Updates">
                            <Updates></Updates>
                        </Tab>
                    </Tabs>
                </Col>
                <Col xs={1}>
                    Addons
                </Col>
            </Row>
        </Container>
    </>
}