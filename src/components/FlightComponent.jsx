import React, { Component } from 'react'
import FlightService from '../services/FlightService'

class FlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                flights: []
        }
    }

    
    viewFlight(id){
        this.props.history.push(`/view-flight/${id}`);
    }

    componentDidMount(){
        FlightService.getFlights().then((res) => {
            this.setState({ flights: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Flights List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Flight Name</th>
                                    <th> Flight Timing</th>
                                    <th> Flight Stop</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.flights.map(
                                        flight => 
                                        <tr key = {flight.id}>
                                             <td> { flight.name} </td>   
                                             <td> {flight.timing}</td>
                                             <td> {flight.stop}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFlight(flight.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default FlightComponent