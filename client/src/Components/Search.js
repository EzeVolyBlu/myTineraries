import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            cityFilter: ''
        }
    }

    handleChange = e => {
        this.setState({
            cityFilter: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render(){

        return (
    
            
        )

    }
}

export default Search;