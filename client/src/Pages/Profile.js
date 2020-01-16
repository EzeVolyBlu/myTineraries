import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { 
    checkToken 
} from "../store/actions/loginActions";
import { connect } from 'react-redux';
import Home from '../Components/Home'


class Profile extends Component {

    
    componentDidMount(){
        
        
        this.props.checkToken(this.props.match.params.token)



    }


    render() {

        
        if(!this.props.loginReducer.isLogged){
            return <Redirect to={`/login`} />
        }





        return (
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">
                <div>
                    <h1 className="text-center">My Profile</h1>            
                    <h4 className="text-center">Hello {this.props.loginReducer.user.name}</h4>
                </div>
                <Home />            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkToken: token => dispatch(checkToken(token))
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Profile);