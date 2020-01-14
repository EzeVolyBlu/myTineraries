import React, { Component } from 'react'
import { Alert } from 'reactstrap';


export default class ErrorRoute extends Component{
  
  constructor(){
      super()
      this.state = {
          alertVisible: false
      }
  }

    render(){
  
      return (
        <div className="mx-auto w-75">
          <Alert isOpen={this.state.alertVisible} color="danger text-center">
            Inexistent route
          </Alert>
        </div>
      );
    }
    
  };