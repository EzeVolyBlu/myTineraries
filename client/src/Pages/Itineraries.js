import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../Components/Spinner';
import Itinerary from '../Components/Itinerary';


import fetchItineraries from "../store/actions/itineraryActions";

// import getUsers from "../store/actions/usersActions";



class Itineraries extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            cityId: this.props.match.params.cityId, 
        }
    }


    componentDidMount() {

        this.props.fetchItineraries(this.state.cityId);


    }

    


    render() {

        
        const { itineraries } = this.props.itinerariesReducer

        

        return (
            <div className="mb-auto h-100 d-flex flex-column justify-content-between">

                <h2 className="title mt-4"> {this.props.itinerariesReducer.cityName} </h2>


                {(this.props.itinerariesReducer.isFetching ?
                    <Loading className="align-spinner " /> :

                    (itineraries.length === 0) ? 
                    <h3 className="my-auto text-center">No itineraries added</h3> :

                    <div className="scroll flex-column px-2">
                        <h5 className="mx-2">Avalaible MYtineraries</h5>

                        {(itineraries.map(
                            itinerary => {

                                return (<Itinerary
                                    itinerary={itinerary}
                                    key={itinerary._id}
                                />)
                            }
                        )
                        )}
                    </div>

                )}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itinerariesReducer: state.itinerariesReducer,
        // usersReducer: state.usersReducer

    }
}


const mapDispatchToProps = dispatch => {


    return {
        fetchItineraries: (cityId) => dispatch(fetchItineraries(cityId)),
        // getUsers: (itineraries) => dispatch(getUsers(itineraries))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Itineraries);