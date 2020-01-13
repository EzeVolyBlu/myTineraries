import React, { Component } from 'react'
import { Input } from 'reactstrap';
import City from '../Components/City';
import Loading from '../Components/Spinner';
import './Styles.css'
import { connect } from "react-redux";
import  { fetchCities }  from "../store/actions/citiesActions";


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
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">


                

                <h2 className="title mt-4"> Cities </h2>


                {(this.props.citiesReducer.didInvalidate ? 
                    <h3 className="mx-auto">No results found</h3> : 
                    this.props.citiesReducer.isFetching ? 
                        <Loading className="align-spinner "/> : 
                        
                        <div className="col scroll w-100 ">
                            {(filteredCities.map(city => { return <City city={city} key={city._id} />}) )}
                        </div>
                    )}

                <div className="row mx-0 p-1">

                <Input
                    type="search"
                    name="search"
                    id="filter"
                    placeholder="Filter by name..."
                    value={this.state.search}
                    onChange = {this.updateSearch.bind(this)}
                    className="my-2"
                />
                </div>


                

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