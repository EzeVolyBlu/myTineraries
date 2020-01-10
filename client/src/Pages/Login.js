import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { submitLogin, closeAlert, completeFields, submitGoogleLogin } from "../store/actions/usersActions";

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
    }

    render() {

        const alertVisible = this.props.usersReducer.alert.visible
        const alertColor = this.props.usersReducer.alert.color
        const alertMessage = this.props.usersReducer.alert.message


        const handleInputChange = event => {
            let name = event.target.name;
            let value = event.target.value;

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


        const handleGoogleLogin = event => {
            
            this.props.submitGoogleLogin();
            event.preventDefault();
        }

        const closeAlert = () => {
            this.props.closeAlert()
        }


        return (
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> Login </h2>

                <div className="d-flex justify-content-around mx-auto my-4">
                    <img className="p-3 rounded-circle avatar" src={this.props.usersReducer.avatar} alt="avatar" />
                </div>

                <div className="col scroll w-100 ">

                    <Form className="px-3 mt-4">

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>

                            <Input type="email" name="email" id="exampleEmail" placeholder="Email..." required onChange={handleInputChange} value={this.state.email} />


                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password..." required onChange={handleInputChange} value={this.state.password} />
                        </FormGroup>

                        <Alert className="mt-2 mb-0" color={alertColor} isOpen={alertVisible} toggle={closeAlert}>
                            {alertMessage}
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
                    </Form>

                        {/* <Link to="http://localhost:5000/users/auth/google"> */}
                        <a href="http://localhost:5000/users/auth/google">
                        



                            <Button
                                className="my-3 w-100 bg-primary"
                                // onClick={handleGoogleLogin}
                            >
                                Login with Google
                            </Button>
                            </a>

                        {/* </Link> */}




                </div>



            </div>

        );
    }


}

const mapStateToProps = state => {
    return {
        usersReducer: state.usersReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: loginData => dispatch(submitLogin(loginData)),
        submitGoogleLogin: () => dispatch(submitGoogleLogin()),
        closeAlert: () => dispatch(closeAlert()),
        completeFields: (state) => dispatch(completeFields(state))

    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Login);