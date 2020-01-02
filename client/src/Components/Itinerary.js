// // import { Link } from 'react-router-dom';
import axios from 'axios';

import image from '../img/GaudiLover.png'
import React, { useState, Component } from 'react';
import ItCarousel from '../Components/Carousel'
import Comments from '../Components/Comments'


import { Collapse, Button, CardBody, Card } from 'reactstrap';



class Itinerary extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      users: []
    }
  }


  getUsers = async () => {
    let res = await axios.get(`http://localhost:5000/users/${this.props.itinerary.userId}`);
    console.log('res.data',res.data)
    let { name, image } = res.data;
    console.log('name',name)
    console.log('image',image)

    this.setState({ users: {name, image} });
  };

  componentDidMount(){

    this.getUsers()


  }





  render () {

  const toggle = () => this.setState({isOpen: !this.state.isOpen});

  console.log('this.state',this.state)

  return (

    <div className="my-2 col border border-secondary rounded p-0">

      <div className="row fix-margin pt-2">

        <div className="col-3 px-2">
          <img width="100%" src={image} alt="profile" className="carg-img" />
          <p className="text-center">{this.state.users.name}</p>
        </div>

        <div className="col-9 p-0">
          <h4 className="mt-1 mx-1">{this.props.itinerary.title}</h4>

          <div className="row mx-1">

            <div className="col-3 p-0">
              <p>Likes: {this.props.itinerary.rating}</p>
            </div>

            <div className="col-5 p-0">
              <p>Duration: {this.props.itinerary.duration}</p>
            </div>

            <div className="col-4 p-0">
              <p>Price: $ {this.props.itinerary.price} </p>
            </div>


          </div>
          <div className="row mx-1">


            {this.props.itinerary.hashtags.map((it, index) => {
              return <p className="mx-1" key={index}> {it}</p>
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
        <Collapse isOpen={this.state.isOpen}>
          <Card className="border-0">
            <h6 className="m-2 px-1">Activities</h6>
            <CardBody>

              <ItCarousel />



            </CardBody>

            <Comments />

          </Card>
        </Collapse>

        <Button
          className="mb-0 w-100"
          color="primary"
          onClick={toggle}
          style={{ marginBottom: '1rem' }}
        >
          {(this.state.isOpen ? 'Close' : 'View All')}
        </Button>






      </div>


    </div>


  );

}


  
};

export default Itinerary;
