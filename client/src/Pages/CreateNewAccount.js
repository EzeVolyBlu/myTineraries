
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'

import { 
    submitAccount, 
    refreshEmail, 
    refreshPassword, 
    closeAlert, 
    completeFields 
} from "../store/actions/registerActions";

class CreateNewAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
            userAgree: false,
            name: '',
            email: '',
            password: '',
        }
    }


    componentWillUnmount(){
        this.props.closeAlert()

        this.setState({
            password:''
        })
    }




    render() {

        
        const {
            invalidEmail,
            invalidName,
            invalidPassword,
            // registerSuccess
        } = this.props.registerReducer;

        

        const {
           visible,
           color,
           message
        } = this.props.registerReducer.alert;



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
       
        const handleSubmit = event => {


            this.props.submitAccount(this.state);
            event.preventDefault();

        }

        const closeAlert = () => {
            this.props.closeAlert()
        }

        const userAgree = () => {
            this.setState({
                userAgree: !this.state.userAgree
            })
        }

        return (



            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> Create New Account </h2>

                <div className="d-flex justify-content-around mx-auto my-4">
                    <img className="p-3 rounded-circle avatar" src={this.state.avatar} alt="avatar" />

                </div>


                <div className="col scroll w-100 ">

                    <Form className="px-3 mb-auto mt-4">



                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>

                            <Input type="text" name="name" invalid={invalidName} id="exampleName" placeholder="Name..." required onChange={handleInputChange} value={this.state.name} />

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>

                            <Input type="email" invalid={invalidEmail} name="email" id="exampleEmail" placeholder="Email..." required onChange={handleInputChange} value={this.state.email} />
                            

                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" invalid={invalidPassword} name="password" id="examplePassword" placeholder="Password..." required onChange={handleInputChange} value={this.state.password} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">Avatar</Label>
                            <Input type="select" name="avatar" id="exampleSelect" onChange={handleInputChange} value={this.state.avatar}>
                                <option value='https://image.flaticon.com/icons/svg/747/747376.svg'>default</option>
                                <option value='https://image.flaticon.com/icons/svg/828/828838.svg'>1</option>
                                <option value='https://image.flaticon.com/icons/svg/145/145867.svg'>2</option>
                                <option value='https://image.flaticon.com/icons/svg/828/828786.svg'>3</option>
                                <option value='https://image.flaticon.com/icons/svg/828/828837.svg'>4</option>
                            </Input>
                        </FormGroup>


                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" onChange={userAgree} value={this.state.userAgree} checked={this.state.userAgree} />
                                I agree to terms and conditions
                            </Label>
                        </FormGroup>

                        <Alert className="mt-2 mb-0" color={color} isOpen={visible} toggle={closeAlert}>
                            {message}
                        </Alert>


                        {( (this.state.name === '' |
                            this.state.email === '' |
                            this.state.password === '' |
                            !this.state.userAgree) ?
                            
                            <Button

                            onClick={submitValidator}
                            className="my-3 w-100 bg-secondary"
                            >
                            Submit
                            </Button> :

                            <Button
                            type='submit'
                            className="my-3 w-100 bg-primary"
                            onClick={handleSubmit}>
                            Submit
                            </Button>
                            )}

                            
                        
                    </Form>

                </div>



            </div>

        );
    }


}

const mapStateToProps = state => {
    return {
        registerReducer: state.registerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAccount: userData => dispatch(submitAccount(userData)),
        // este esta bien refreshEmail: () => dispatch({type: 'coso'}),
        refreshEmail: () => dispatch(refreshEmail()),
        refreshPassword: () => dispatch(refreshPassword()),
        closeAlert: () => dispatch(closeAlert()),
        completeFields: (state) => dispatch(completeFields(state))

    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CreateNewAccount);