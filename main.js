const api = require("./berrlyapi");
const ocsignupClass = require("ocsignupjs");
const config = require("./config.json");

function main () {
    api.getEvents()
    .then(function(events) {
        for (var i = 0; i < 1; i++) {
            api.getEventMembers(events[i]).then((body) => console.log(body)).catch((error)=> console.error(error))
            .then(function(members){
                var ocsignup = new ocsignupClass.Ocsignup(config.signup_url);
                for (var i = 0; i < members.length; i++) {
                    var form = {
                        email: members[i]["E-mail 1"],
                        name: members[i]["Nom complet"],
                        REF: members[i]["REF"],
                        phone: members[i]["Telf - Mòbil"],
                        session: members[i]["Tiquet"],
                        assistance: members[i]["Estat"]
                    }
                }
                ocsignup.SignUp(config.signup.id, config.signup.title, form);
            });
        }
    });
}

module.exports = {
    main: main
}