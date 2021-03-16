const api = require("./berrlyapi");
const ocsignup = require("./ocsignup");
const config = require("./config.json");
const colours = require("./colours");

function main () {
    api.getEvents()
    .then(async function(events) {
        for (var i = 0; i < events.length; i++) {
            console.log(colours.colours.FgYellow + "Getting members from " + colours.colours.FgWhite + events[i].name + colours.colours.FgYellow + " event." + colours.colours.Reset);
            await api.getEventMembers(events[i])
            .then(async function(members) {
                for (var i = 0; i < members.length; i++) {
                    console.log(colours.colours.FgGreen + "Submitting involved " + colours.colours.FgWhite + members[i]["Nom complet"] + colours.colours.FgGreen + "." + colours.colours.Reset);
                    var form = {
                        email: members[i]["E-mail 1"],
                        name: members[i]["Nom complet"],
                        REF: members[i]["REF"],
                        phone: members[i]["Telf - Mòbil"],
                        session: members[i]["Tiquet"],
                        assistance: members[i]["Estat"]
                    }
                    await ocsignup.signUp(config.signup.id, config.signup.title, form);
                }
            });
        }
    });
}

module.exports = {
    main: main
}