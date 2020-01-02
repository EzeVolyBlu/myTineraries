import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


export default function Comments() {
    
    function activateLasers(e) {
        e.preventDefault();
        alert('submit')
      }
    
    return (
        <div className="p-2">
            <h6 className="m-2">Comments</h6>

           
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append" className="d-flex col-1 align-items-center p-0 text-center justify-content-center">
                    {/* <Button color="secondary"> */}
                        <i className="material-icons link-pointer" onClick={activateLasers}>
                            keyboard_arrow_right
                        </i>
                    {/* </Button> */}
                </InputGroupAddon>
            </InputGroup>
            
        </div >
    )
}
