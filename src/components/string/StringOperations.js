// import react components
import { Container,Row,Col,Form } from "react-bootstrap";
import {useEffect, useState} from "react";

// import application specific components
import Top from "../navigation/TopNavigation";
import LeftNavigation from "../navigation/left/LeftNavigation";


export default function StringOperations() {
    const [inputString, setInputString] = useState('');
    const [operation, setOperation] = useState('');
    const [outputString,setOutputString] = useState('')

    // use effect to update output value in case either input or operation changes
    useEffect(()=> {
        try {
            switch(operation) {
                case "Lower Case":
                    setOutputString(inputString.toLowerCase());
                    break;
                case "Upper Case":
                    setOutputString(inputString.toUpperCase());
                    break;
                case "Base64 Encode":
                    setOutputString(btoa(inputString));
                    break;
                case "Base64 Decode":
                    try{
                        setOutputString(atob(inputString));
                    }catch(error){
                        console.log(error);
                        setOutputString('Please enter valid value to decode'); 
                    }
                    break;
                default:
                    setOutputString(inputString);
            }
        }catch(error){
            setOutputString('Please enter valid value to decode'); 
        }
        

    },[inputString,operation]);

    const setInputStringValue = (event) => {
        setInputString(event.target.value);
       
    } 

    const setOutputStringValue = (event) => {
        setOutputString(event.target.value);
    } 

    const executeOperation = (event) => {
        setOperation(event.target.value);       

    }

    return <>
        <Container fluid>
            <Row>
                <Top></Top>
            </Row>
            <Row className="mt-2">
                <Col xs={1}>
                    <LeftNavigation></LeftNavigation>
                </Col>
                <Col>
                    <Form.Select className="mt-3" value={operation} onChange={executeOperation}>
                        <option value="">Select operation</option>
                        <option value="Lower Case">Lower Case</option>
                        <option value="Upper Case">Upper Case</option>
                        <option value="Base64 Encode">Base64 Encode</option>
                        <option value="Base64 Decode">Base64 Decode</option>
                    </Form.Select>
                    <Form.Group className="mt-3">
                        <Form.Label>Input&nbsp;<i className="bi bi-info-circle-fill"></i></Form.Label>
                        <Form.Control as="textarea" value={inputString} onChange={setInputStringValue} rows="5"/>
                    </Form.Group>

                    
                                            
                    <Form.Group className="mt-3">
                        <Form.Label>Output &nbsp;<i className="bi bi-info-circle-fill"></i></Form.Label>
                        <Form.Control as="textarea" value={outputString} onChange={setOutputStringValue} rows="5" disabled/>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    </>
}