import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { storeToken,
checkToken } from "../store/actions/loginActions";
import { connect } from 'react-redux';


class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            // token: this.props.match.params.token
        }

    }

    componentDidMount(){

        console.log('this.props',this.props);
        
        // this.props.storeToken(this.state.token)
        this.props.checkToken()
    }


    render() {

        
        if(!this.props.loginReducer.isLogged){
            return <Redirect to={`/login`} />
        }





        return (
            <div>
                <h1 className="text-center">My Profile</h1>            
                <h4 className="text-center">Hello {this.props.loginReducer.user.name}</h4>            
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
        checkToken: () => dispatch(checkToken())
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Profile);