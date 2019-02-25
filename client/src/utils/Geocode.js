import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const APIKEY = "&key=AIzaSyDkYVacePgHMD6xKu7RIfrX7FosJBXfXF0";

export default {
    getLatLong: function (address) {
        return axios.get(BASE_URL + address + APIKEY)
    }
};
