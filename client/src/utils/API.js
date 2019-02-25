import axios from 'axios';

export default {
    saveCenter: function(centerData) {
        return axios.post('/api/centers', centerData);
    },

    getCenters: function() {
        return axios.get('/api/centers/');
    },

    findByCategories: function(categories) {
        return axios.get('/api/centers/categories/' + categories);
    },

    findById: function(id) {
        return axios.get('/api/centers/id/' + id);
    },

    updateCenter: function (id, centerData) {
        return axios.put('/api/centers/id/' + id, centerData);
    }
};
