import React, { Component } from 'react'
import FlightService from '../service/FlightService'

class ViewFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            flight: {}
        }
    }

    componentDidMount(){
        FlightService.getFlightById(this.state.id).then( res => {
            this.setState({flight: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Flight Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Flight Name: </label>
                            <div> { this.state.flight.name }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Timing: </label>
                            <div> { this.state.flight.timing }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Stop: </label>
                            <div> { this.state.flight.stop }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFlightComponent