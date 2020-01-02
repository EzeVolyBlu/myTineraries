
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateNewAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
            userAgree: false
        }
    }



    render() {

        const mailExists = false



        const handleChange = e => {
            this.setState({
                avatar: e.target.value
            })
        }

        const userAgree = () =>{
            this.setState({
                userAgree: !this.state.userAgree
            })
        }
        
        return (

            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> Create New Account </h2>
                
                <Form className="px-3 mb-auto mt-4">
    
                <div className="d-flex ">
                    <img className="w-25 mx-auto"src={this.state.avatar} alt="avatar"/>
    
                </div>
    
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
    
                        {(mailExists ?
                            <Input invalid type="text" name="name" id="exampleEmail" placeholder="Name..." required/> :
                            <Input type="text" name="name" id="exampleEmail" placeholder="Name..." required/>
                        )}
    
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email..." required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password..." required />
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="exampleSelect">Avatar</Label>
                        <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
                            <option value='https://image.flaticon.com/icons/svg/747/747376.svg'>default</option>
                            <option value='https://image.flaticon.com/icons/svg/828/828838.svg'>1</option>
                            <option value='https://image.flaticon.com/icons/svg/145/145867.svg'>2</option>
                            <option value='https://image.flaticon.com/icons/svg/828/828786.svg'>3</option>
                            <option value='https://image.flaticon.com/icons/svg/828/828837.svg'>4</option>
                        </Input>
                    </FormGroup>
    
    
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  onChange={userAgree}/>
                            I agree to terms and conditions
                        </Label>
                    </FormGroup>
                    <Button disabled={!this.state.userAgree} className="mt-3 w-100 bg-primary">Submit</Button>
                </Form>
            
            
            </div>

        );
    }





}

export default CreateNewAccount;