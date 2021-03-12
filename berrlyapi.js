const config = require('./config.json');
const fetch = require('node-fetch');

function getEvents() {
    return new Promise(function (resolve, reject) {
        fetch("https://api.berrly.com/v1/events", {headers: {"Authorization": "Bearer " + config.token}})
        .then(function (resp) {
            return resp.text() 
        })
        .then(function (body) {
            resolve(JSON.parse(body));
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

module.exports = {
    getEvents: getEvents
}