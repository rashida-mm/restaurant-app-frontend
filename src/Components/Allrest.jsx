//component for api fetching
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import RestCard from './RestCard'
function Allrest() {

  const base_url = 'https://restaurant-backend-rashida.onrender.com/restaurants'

  //to hold array of data
  const[Allrestdata,setAllrestdata] = useState([])

  //api fethcing
  const fetchData =async()=>{
    const result =await axios.get(base_url)
    console.log(result.data);
    setAllrestdata(result.data)
  }
  console.log(Allrestdata);
  useEffect(()=>{
  fetchData()
  },[])

  return (
    <div>
    <Row>
    {
      Allrestdata.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <RestCard restaurants = {item}/>
        </Col>
      ))
    }
    </Row>
    </div>
  )
}

export default Allrest