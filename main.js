const api = require("./berrlyapi");

function main () {
    api.getEvents()
    .then(function(events) {
        for (var i = 0; i < 1; i++) {
            //api.getEventMembers(events[i]).then((body) => console.log(body)).catch((error)=> console.error(error));
            console.log(events[i].id_event);
        }
    });
}

module.exports = {
    main: main
}