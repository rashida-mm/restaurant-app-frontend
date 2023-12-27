import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function RestReview({rev}) {
    console.log(rev); //array
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
 <Button variant="dark" style={{color:'white'}}  onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    <div>
        {rev?.map(item => (
            <ListGroup>
                <ListGroup.Item>{item.name}</ListGroup.Item>
                <ListGroup.Item>{item.date}</ListGroup.Item>
                <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
                <ListGroup.Item>{item.comments}</ListGroup.Item>
            </ListGroup>
        ))}
    </div>
</Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview