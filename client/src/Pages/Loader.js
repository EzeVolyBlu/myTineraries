import React, { Component } from 'react'
import Home from '../Components/Home'
import Spinner from '../Components/Spinner'
import { Redirect } from 'react-router-dom';



import { connect } from 'react-redux';
import {
    validating,
} from "../store/actions/loginActions";



class Loader extends Component {


    componentDidMount() {
        // this.props.validating(this.props.match.params.token)
    }


    render() {

        if(this.props.loginReducer.isLogged){
            return <Redirect to={`/login`} />
        }

        // console.log(this.props.loginReducer.fetching)
        const { fetching } = this.props.loginReducer

        if(!this.props.loginReducer.isLogged && !this.props.loginReducer.fetching){
            return <Redirect to={`/login`} />
        }


        // const fetching = this.props.loginReducer.fetching
       


        return (
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">
                <h3 className="text-center">Hi! I'm a loader</h3>
                {((fetching) ?
                    <Spinner /> 
                    : '')
                }

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
        validating: (token) => dispatch(validating(token))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (Loader);