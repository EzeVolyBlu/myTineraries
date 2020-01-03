import React from 'react'
import { Link } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const City = (props) => {


    

  return (
    
    <Link to={`/itineraries/${props.city._id}`} className="link-style-card">
      <div className="my-4">
        <Card>
          <CardImg top width="100%" src={props.city.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.city.name}</CardTitle>
            <CardSubtitle>{props.city.country}</CardSubtitle>
            <CardText>{props.city.description}</CardText>
            
          </CardBody>
        </Card>
      </div>

    </Link>
    
  );
};



export default City;
