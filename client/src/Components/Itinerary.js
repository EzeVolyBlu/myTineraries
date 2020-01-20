// // import { Link } from 'react-router-dom';
import axios from 'axios';

// import image from '../img/GaudiLover.png'
import React, { Component } from 'react';
import ItCarousel from '../Components/Carousel'
import Comments from '../Components/Comments'


import { Collapse, Button, CardBody, Card } from 'reactstrap';



class Itinerary extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      user: {
        name: '',
        avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg'
      }
    }
  }


  getUsers = async () => {
    let res = await axios.get(`http://localhost:5000/users/${this.props.itinerary.userId}`);
    let { name, avatar } = res.data;

    this.setState({ user: {name, avatar} });
  };

  componentDidMount(){

    this.mounted = true;

    if(this.mounted)
      this.getUsers()


  }

  componentWillUnmount(){
    this.mounted = false;

  }






  render () {

  const toggle = () => this.setState({isOpen: !this.state.isOpen});
  const { 
    name, 
    avatar 
  } = this.state.user
  
  const {
    title,
    rating,
    duration,
    price,
    hashtags,
    activities
  } = this.props.itinerary

  return (

    <div className="my-2 col border border-secondary rounded p-0">

      <div className="row fix-margin pt-2">

        <div className="col-3 px-2">
          <img width="100%" src={avatar} alt="profile" className="carg-img rounded-circle p-2" />
          <p className="text-center">{name}</p>
        </div>

        <div className="col-9 p-0">
          <h4 className="mt-1 mx-1">{title}</h4>

          <div className="row mx-1">

            <div className="col-3 p-0">
              <p>Likes: {rating}</p>
            </div>

            <div className="col-5 p-0">
              <p>Duration: {duration}</p>
            </div>

            <div className="col-4 p-0">
              <p>Price: $ {price} </p>
            </div>


          </div>
          <div className="row mx-1">


            {hashtags.map((it, index) => {
              return <p className="mx-1" key={index}> {it}</p>
            })}


          </div>
        </div>


      </div>

      <div className="">

        <Collapse isOpen={this.state.isOpen}>
          <Card className="border-0">
            <h6 className="m-2 px-1">Activities</h6>
            <CardBody>

              <ItCarousel 
                carouselData={activities} 
                itName={title}/>



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
