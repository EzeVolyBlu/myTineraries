
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import  {submitAccount}  from "../store/actions/usersActions";
// import  {fetchEmail}  from "../store/actions/usersActions";

class CreateNewAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
            userAgree: false,
            name: '',
            email: '',
            password: ''

        }
    }



    render() {

        const mailExists = false

        const handleInputChange = event => {
            let name = event.target.name;
            let value = event.target.value;
            
            this.setState({
                [name]: value
            })
        }

        const handleSubmit = event => {
            // if(!this.props.mailExists){

                this.props.submitAccount(this.state);
                event.preventDefault();
                
                this.setState({
                    name: '',
                    email: '',
                    image: '',
                    password: '',
                    userAgree: false,
                    avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg'
                });

            // }
        }   

        // const handleChange = e => {
        //     this.setState({
        //         avatar: e.target.value
        //     })
        // }

        const userAgree = () =>{
            this.setState({
                userAgree: !this.state.userAgree
            })
        }
        
        return (

            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> Create New Account </h2>

                <div className="d-flex justify-content-around mx-auto my-4">
                    <img className="p-3 rounded-circle avatar"src={this.state.avatar} alt="avatar"/>
    
                </div>


                <div className="col scroll w-100 ">

                    <Form className="px-3 mb-auto mt-4">
        
                    
        
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
        
                            {(mailExists ?
                                <Input invalid type="text" name="name" id="exampleEmail" placeholder="Name..." required onChange={handleInputChange} value={this.state.name}/> :
                                <Input type="text" name="name" id="exampleName" placeholder="Name..." required onChange={handleInputChange} value={this.state.name}/>
                            )}
        
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email..." required onChange={handleInputChange} value={this.state.email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password..." required  onChange={handleInputChange} value={this.state.password}/>
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
                                <Input type="checkbox"  onChange={userAgree} value={this.state.userAgree} checked={this.state.userAgree}/>
                                I agree to terms and conditions
                            </Label>
                        </FormGroup>
                        <Button 
                            disabled={!this.state.userAgree} 
                            className="mt-3 w-100 bg-primary" 
                            onClick={handleSubmit}>
                                Submit
                        </Button>
                    </Form>
                
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
        submitAccount: userData => dispatch(submitAccount(userData)),
    }

}

export default connect(
    null, 
    mapDispatchToProps)
        (CreateNewAccount);