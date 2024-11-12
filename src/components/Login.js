import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Form,Row,Col } from 'react-bootstrap';
import { useState } from 'react';

async function LoginUser(credentails) {
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentails)
    }).then(data => data.json()).catch(error => console.log(error));
}


export default function Login({SetIsLoggedIn}) {
    const [username, SetUserName] = useState();
    const [password, SetPassWord] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = LoginUser({
            username,
            password
        })
        console.log('token='+token);
        SetIsLoggedIn('true');

    };
    return (
        
            <Container>
                <br/>
            <Card className="text-center">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className='mb-3' controlId='formPlainTextEmail'>
                                <Form.Label column sm='2'>
                                    Email
                                </Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' onChange={e => SetUserName(e.target.value)}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-3' controlId='formPlainTextPassword'>
                                <Form.Label column sm='2'>
                                    Password
                                </Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='password' onChange={e=>SetPassWord(e.target.value)}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button variant="primary" onClick={handleSubmit}>Login</Button>&nbsp;<Button variant="primary">Singup</Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            </Container>
        
    )
}