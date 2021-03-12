const api = require("./berrlyapi");

function main () {
    api.getEvents()
    .then(function(events) {
        for (var i = 0; i < events.lenght; i++) {
            console.log(events[i].id_event);
        }
    });
}

module.exports = {
    main: main
}