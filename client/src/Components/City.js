import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const City = (props) => {

  return (
    <div className="my-4">
      <Card>
        <CardImg top width="100%" src={props.city.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.city.name}</CardTitle>
          <CardSubtitle>{props.city.country}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default City;
