import React, { Component } from 'react'
import './Landing.css'
import Navbar from '../Components/Navbar';
// import '../Components/StartBrowsing'
import StartBrowsing from '../Components/StartBrowsing'
import Logo from '../Components/Logo'
import Carousel from '../Components/Carousel'
/*
export default function Landing() {
    return (
        <div className="mb-auto">
            <Logo />
            <StartBrowsing />
            <Carousel />
        </div>
    )
}
*/
import { connect } from "react-redux";
import  fetchCities  from "../store/actions/cityActions";
import Loading from '../Components/Spinner';



class Landing extends Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){

        console.log('did', this.props)
        this.props.fetchCities()
      
    }
    
    
    render(){

        const { cities } = this.props.citiesReducer;
        console.log('cities',cities)

        return (
            <div className="mb-auto">
                <Logo />
                <StartBrowsing />


                {(this.props.citiesReducer.didInvalidate ? 
                    <div className="d-flex h-50">
                        <h3 className="m-auto">No results found</h3>  
                    </div> :
                    this.props.citiesReducer.isFetching ? 
                    <div className="d-flex h-50">
                        <Loading className="align-spinner "/>
                    </div> : 
                        
                    <div className="d-flex justify-content-center mt-4">
                        <Carousel carouselData={cities}/>

                    </div>

                    
                        
                        )}
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
)(Landing);