// import react components
import { Container, Form, Row, Col, Stack } from "react-bootstrap";
// import application specific components
import TopNavigation from "../navigation/TopNavigation";
import LeftNavigation from "../navigation/left/LeftNavigation";

export default function DatabaseOperations() {

    const prpcTables = [
        "pr_engine_classes"
    ];

   

    return <>
        <Container fluid>
            <Row>
                <TopNavigation></TopNavigation>
            </Row>

            <Row className="mt-1">
                <Col xs={1}>
                    <LeftNavigation></LeftNavigation>
                </Col>
                <Col >
                    <Stack direction="horizontal" gap={3}>
                    <Form.Select>
                        <option value=''>Select connection </option>
                        <option value="dev"> Dev </option>
                        <option value="SIT"> SIT </option>

                    </Form.Select>
                    <Form.Select>
                        <option value=''>Select database</option>
                        <option value="pegadata"> pegadata</option>
                        <option value="pegarules"> pegarules</option>

                    </Form.Select>
                    <Form.Select>
                        <option>Select table to view data</option>
                        {prpcTables.map((table) => <option key='1' value={table}>{table}</option>)}
                    </Form.Select>
                    </Stack>
                    
                </Col>
                
            </Row>


        </Container>

    </>
}