// import react components
import { Container, Navbar, Row, Nav, Form, Button } from 'react-bootstrap';
import {useState} from 'react';
import {useFetch} from "../../hooks/useFetch";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function TopNavigation() {
    // fetch random joke
    try{
        useFetch('http://www.official-joke-api.appspot.com/jokes/random',{});
    }
    catch(err){

    }
    
    const style = {color:'white'};
    const [userQuery, setUserQuery] = useState('');
    // const [joke, setJoke] = useState({});
    // const[stories, setStories] = useState([]);

    /**
     *
     * @param query
     */
    const openGoogleSearch = (query) => {
        // console.log(joke);
        window.open(`https://www.google.com/search?q=${query}`);
    }

    /**
     *
     * @param event
     */
    const updateUserQuery = (event) => {
        setUserQuery(event.target.value);
        if(event.target.value === 'react')
            openGoogleSearch(event.target.value);
    }

    return <>
        <Container fluid>
            <Row>
                {/* navigation links */}
                <Navbar bg='dark' data-bs-theme='dark'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/string'>String</Nav.Link>
                        <Nav.Link href='/database'>Database</Nav.Link>
                        <Nav.Link href='/database'>Java</Nav.Link>
                        <Nav.Link href='/database'>Python</Nav.Link>
                        <Nav.Link href='/database'>Javascript</Nav.Link>
                        <Nav.Link href='/ml'>Machine Learning</Nav.Link>
                        <Nav.Link href='/ai'>Artificial Intelligence</Nav.Link>
                        <Nav.Link href='/youtube'>Youtube</Nav.Link>
                        <Nav.Link href='/mail'>Mail</Nav.Link>
                        <Nav.Link href='/drive'>Drive</Nav.Link>
                        <Nav.Link href='/hooks'>Hooks</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                        
                    </Nav>
                    {/* search and profile */}
                    <Form className='d-flex'>
                        <Form.Control
                            type='search'
                            placeholder='Search'
                            className='me-2'
                            aria-label='Search'
                            value={userQuery}
                            onChange={updateUserQuery}
                        />
                        <Button variant='outline-success'>Search</Button>
                        &nbsp;
                        <h4><i style={style} className="bi bi-person-circle"></i> </h4>
                    </Form>
                </Navbar>
            </Row>
        </Container>
    </>
}