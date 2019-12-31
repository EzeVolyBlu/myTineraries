import React, { Component } from 'react'
import { Input } from 'reactstrap';
import City from '../Components/City';
import Loading from '../Components/Spinner';

// import Search from '../Components/Search'
import './Styles.css'

// ARREGLAR SPINNER

import { connect } from "react-redux";
import  fetchCities  from "../store/actions/cityActions";

// const axios = require('axios');

class Cities extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }


    }




    componentDidMount(){

        this.props.fetchCities()
      
    }

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        })
    }

     
    render() {
        

        const { cities } = this.props.citiesReducer;

        let filteredCities = cities.filter(
            city => {
                return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )

        

        return (
            <div className="mobile container row align-items-end">

                

                <h2 className="title"> Cities </h2>



                {(this.props.citiesReducer.isFetching ? 
                    <Loading className="d-flex justify-content-center"/> : 
                    
                    <div className="col scroll w-100 ">
                        {(filteredCities.map(city => { return <City city={city} key={city._id} />}) )}
                    </div>
                     
                )}
                
                <Input
                    type="search"
                    name="search"
                    id="filter"
                    placeholder="Filter by name..."
                    value={this.state.search}
                    onChange = {this.updateSearch.bind(this)}
                    className="mt-4"
                />

                

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        citiesReducer: state.citiesReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Cities);