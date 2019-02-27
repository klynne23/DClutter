import axios from 'axios';

export default {
    saveCenter: function(centerData) {
        return axios.post('/api/centers', centerData);
    },

    getCenters: function() {
        console.log("Api.getCenters function, called upon componentDidMount");
        return axios.get('/api/centers/');
    },

    findByCategories: function(categories) {
        console.log("Api.findByCategories function, called upon user clicking submit");
        return axios.get('/api/centers/categories/' + categories);
    },

    findById: function(id) {
        return axios.get('/api/centers/id/' + id);
    },

    updateCenter: function (id, centerData) {
        return axios.put('/api/centers/id/' + id, centerData);
    }
};
