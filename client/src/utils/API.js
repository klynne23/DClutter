import axios from 'axios';

export default {
    getCenters: function() {
        console.log("Getting")
        return axios.get('/api/centers/');
    },
    getCenter: function(id) {
        return axios.get('api/centers/' + id);
    },
    deleteCenter: function(id) {
        return axios.delete('/api/centers/' + id);
    },
    saveCenter: function(centerData) {
        return axios.post('/api/centers', centerData);
    }
};
