// // import { Link } from 'react-router-dom';

import image from '../img/GaudiLover.png'
import React, { useState } from 'react';


import { Collapse, Button, CardBody, Card } from 'reactstrap';





const Itinerary = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <div className="my-4 col border border-secondary rounded p-0">

      <div className="row fix-margin pt-2">

        <div className="col-3 px-2">
          <img width="100%" src={image} alt="profile" className="carg-img" />
          <p className="text-center">UserName</p>
        </div>

        <div className="col-9 p-0">
          <h4 className="mt-1 mx-1">{props.itinerary.title}</h4>

          <div className="row mx-1">

            <div className="col-3 p-0">
              <p>Likes: {props.itinerary.rating}</p>
            </div>

            <div className="col-5 p-0">
              <p>Duration: {props.itinerary.duration}</p>
            </div>

            <div className="col-4 p-0">
              <p>Price: $ {props.itinerary.price} </p>
            </div>


          </div>
          <div className="row mx-1">


            {props.itinerary.hashtags.map(it => {
              return <p className="mx-1"> {it}</p>
            })}


          </div>
        </div>


      </div>

      <div className="">

        {/* <Navbar color="faded" light>
          <p onClick={toggleNavbar} className="mr-2" > View All Activities</p>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
 */}
      <Collapse isOpen={isOpen}>
        <Card>
          <h6 className="m-2">Activities</h6>
          <CardBody>
          </CardBody>
        </Card>
      </Collapse>

      <Button 
        className="mb-0 w-100" 
        color="primary" 
        onClick={toggle} 
        style={{ marginBottom: '1rem' }}
        >
          {(isOpen ? 'Close' : 'View All')}
        </Button>






      </div>


    </div>


  );
};

export default Itinerary;
