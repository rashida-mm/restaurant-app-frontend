import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {

    const [restDetails, setRestdetails] = useState({})

    //useParams hook are used to get path parameter from the url , to access parameters
    //if there is any parameter value in the url, we can get that in obj format
    // const paraID = useParams()
    // console.log(paraID.id); //object->id=3

    //destructure 
    const { id } = useParams()
    console.log(id); //object->id=3

    const base_url = 'https://restaurant-backend-rashida.onrender.com/restaurants'

    //API call to get detials of the particular restaurants using the path parameter
    const fetchRest = async () => {
        //http://localhost:3000/restaurants/3
        const result = await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setRestdetails(result.data)
    }
    console.log(restDetails);

    useEffect(() => {
        fetchRest()
    }, [])
    //[] dependency array
    return (
        <div>
            <Row>
                <Col>
                    <img src={restDetails.photograph} alt="" style={{width:'450px',height:'500px',margin:'30px'}} />
                </Col>
                <Col>
                <div className='container my-5 p-5'>
                <ListGroup>
                <h1 className='text-center'>{restDetails.name}</h1>
      <ListGroup.Item>Adress : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><RestOp op = {restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview rev = {restDetails.reviews} /></ListGroup.Item>
    </ListGroup>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default ViewRest