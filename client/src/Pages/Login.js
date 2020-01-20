import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { 
    submitLogin, 
    // submitGoogleLogin 
} from "../store/actions/loginActions";
import {
    closeAlert, 
    completeFields,
    refreshEmail,
    refreshPassword
} from '../store/actions/registerActions'

import { Redirect } from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
            email: '',
            password: '',
        }
    }

    componentWillUnmount(){
        this.props.closeAlert()
        this.props.refreshEmail()
        this.props.refreshPassword()

    }

    




    render() {

        const {
            invalidEmail,
            invalidPassword,
            // registerSuccess
        } = this.props.registerReducer;

        const {
            visible, 
            color, 
            message
        } = this.props.loginReducer.alert

        const {
            isLogged, 
            token
        } = this.props.loginReducer

        if(isLogged){
            return <Redirect to={`/user/profile/${token}`} />
        }


        const handleInputChange = event => {
            let name = event.target.name;
            let value = event.target.value;

            if (name === 'email') {
                this.props.refreshEmail()
            }else if (name === 'password') {
                this.props.refreshPassword()
            }

            this.setState({
                [name]: value
            })
        }


        const submitValidator = event => {

            this.props.completeFields(this.state)
            event.preventDefault();
        }

        const handleLogin = event => {
            this.props.submitLogin(this.state);
            event.preventDefault();

        }


        // const handleGoogleLogin = event => {
            
        //     this.props.submitGoogleLogin();
        //     event.preventDefault();
        // }

        const closeAlert = () => {
            this.props.closeAlert()
        }


        return (
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> Login </h2>

                <div className="d-flex justify-content-around mx-auto my-4">
                    <img className="p-3 rounded-circle avatar" src={this.props.loginReducer.user.avatar} alt="avatar" />
                </div>

                <div className="col scroll w-100 ">

                    <Form className="px-3 mt-4">

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>

                            <Input type="email" invalid={invalidEmail} name="email" id="exampleEmail" placeholder="Email..." onChange={handleInputChange} value={this.state.email} />


                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" invalid={invalidPassword} name="password" id="examplePassword" placeholder="Password..." onChange={handleInputChange} value={this.state.password} />
                        </FormGroup>

                        <Alert className="mt-2 mb-0" color={color} isOpen={visible} toggle={closeAlert}>
                            {message}
                        </Alert>

                        {((this.state.email === '' |
                            this.state.password.length < 5) ?

                            <Button

                                onClick={submitValidator}
                                className="mt-3 w-100 bg-secondary"
                            >
                                Login
                            </Button> :

                            <Button
                                type='submit'
                                className="mt-3 w-100 bg-primary"
                                onClick={handleLogin}>
                                Login
                            </Button>
                        )}


                        {/* <Link to="http://localhost:5000/users/auth/google"> */}
                        

                        {/* </Link> */}


                    </Form>

                        

                    <div className="px-3">

                        <a href="http://localhost:5000/users/auth/google">
                            <Button
                                className="my-3 w-100 bg-primary"
                                // onClick={handleGoogleLogin}
                            >
                                Login with Google
                            </Button>
                        </a>

                    </div>






                </div>



            </div>

        );
    }


}

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer,
        registerReducer: state.registerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: loginData => dispatch(submitLogin(loginData)),
        closeAlert: () => dispatch(closeAlert()),
        completeFields: (state) => dispatch(completeFields(state)),
        refreshEmail: () => dispatch(refreshEmail()),
        refreshPassword: () => dispatch(refreshPassword()),

    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Login);