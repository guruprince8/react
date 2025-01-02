import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import TopNavigation from "../navigation/TopNavigation";
export default function Search() {

    const prpcTables = [
        "pr_engine_classes"
    ];

    const [password, setPassword] = useState('default');

    const setValue = (event) => {
        setPassword(event.target.value);
    }

    return <>
        <Container fluid>
            <Row>
                <Col>
                    <TopNavigation></TopNavigation>
                </Col>
            </Row>
            <Form className="mt-1">
                <Form.Group className="mb-3" controlId="exampleForm.password">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control value={password} type="email" placeholder="name@example.com" onChange={setValue}></Form.Control>
                    <Form.Text>{password}</Form.Text>
                </Form.Group>
                <Row>
                <Col>
                        <Form.Select>
                            <option value=''>Select connection </option>
                            <option value="dev"> Dev </option>
                            <option value="SIT"> SIT </option>

                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option value=''>Select database</option>
                            <option value="pegadata"> pegadata</option>
                            <option value="pegarules"> pegarules</option>

                        </Form.Select>
                    </Col>
                    <Col>
                    <Form.Select>
                    <option>Select table to view data</option>
                    {prpcTables.map((table)=> <option key='1' value={table}>{table}</option>)}
                </Form.Select>
                    </Col>
                </Row>
                
            </Form>
        </Container>

    </>
}