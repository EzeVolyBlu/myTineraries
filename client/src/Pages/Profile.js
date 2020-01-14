import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { storeToken,
checkToken } from "../store/actions/loginActions";
import { connect } from 'react-redux';
import Home from '../Components/Home'


class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            token: this.props.match.params.token
        }

    }

    componentDidMount(){
        console.log((this.props));

        this.props.checkToken(this.state.token)

        // this.props.storeToken(this.state.token)
    }


    render() {

        console.log((this.props));
        
        // if(!this.props.loginReducer.isLogged){
        //     return <Redirect to={`/login`} />
        // }





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
        storeToken: token => dispatch(storeToken(token)),
        checkToken: token => dispatch(checkToken(token))
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Profile);