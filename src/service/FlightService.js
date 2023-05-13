import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/flights";

class FlightService {

    getFlights(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getFlightById(flightId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + flightId);
    }
}
export default new FlightService()
