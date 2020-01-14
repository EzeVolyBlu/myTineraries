import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { useLocation } from 'react-router-dom';


export default class ErrorRoute extends Component{
  
  constructor(){
      super()
      this.state = {
          alertVisible: true
      }
  }


  componentWillUnmount(){
    this.setState({
      alertVisible: false
    })
  }

    render(){

      return (


        (this.state.alertVisible ? 
          <div className="mx-auto w-75">
          <Alert isOpen={this.state.alertVisible} color="danger text-center">
            Error 404
          </Alert>
          <NoMatch />
        </div> : '')

      );
    }
  };

  const NoMatch = () =>{
    let location = useLocation();
    return (
      <div>
          No match for<code>{location.pathname}</code> 
      </div>)
  }