import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../Components/Spinner';
import Itinerary from '../Components/Itinerary';


import fetchItineraries from "../store/actions/itineraryActions";


class Itineraries extends Component {

    constructor(props) {
        super(props)

        this.state = { cityId: this.props.match.params.cityId }
    }


    componentDidMount() {

        this.props.fetchItineraries(this.state.cityId)

    }


    render() {
        const { itineraries } = this.props.itinerariesReducer
        console.log('itineraries', itineraries)
        return (
            <div className="mobile">

                {(this.props.itinerariesReducer.isFetching ?
                    <Loading className="align-spinner" /> :

                    <div className="col scroll w-100 ">
                        {(itineraries.map(
                            itinerary => {
                                return (<Itinerary
                                    itinerary={itinerary}
                                    key={itinerary._id}
                                />)
                            }
                        )
                        )}
                        Itineraries
                    </div>

                )}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itinerariesReducer: state.itinerariesReducer
    }
}


const mapDispatchToProps = dispatch => {


    return {
        fetchItineraries: (cityId) => dispatch(fetchItineraries(cityId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Itineraries);