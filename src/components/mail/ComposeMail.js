import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

export default function ComposeMail() { 
    const[show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return <>
        {/* <i className="bi bi-inbox" onClick={handleShow}></i> Compose Mail */}
        <Button variant="primary" onClick={handleShow}>Compose</Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Compose Mail
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    </>
}