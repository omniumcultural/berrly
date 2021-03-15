const config = require('./config.json');
const fetch = require('node-fetch');
const utils = require('./utils.js');
const {Tabletojson: tabletojson} = require('tabletojson');

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

function getEventMembers(event) {
    return new Promise(function (resolve, reject) {
        utils.download(event.id_event)
        .then(function (resp){
            var table = resp.substr(resp.indexOf("<table"), resp.indexOf("</table>") - resp.indexOf("<table") + 8);
            const converted = tabletojson.convert(table);
            var result = [];
            for (var i = 0; i < converted[0].length; i++) {
                if (converted[0][i]['Nom complet']) {
                    result.push(converted[0][i]);
                }
                resolve(result);
            }
        })
        .catch(function (error) {
            reject(error);
        });
    })
}

module.exports = {
    getEvents: getEvents,
    getEventMembers: getEventMembers
}