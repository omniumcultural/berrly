const fetch = require('node-fetch');
const config = require('./config.json');

function signUp (signupId, title, form) {
    var url = config.signup.url;
    return new Promise(function (resolve, reject) {
        var keys = Object.keys(form);
        var answers = {};
        for ( var i = 0; i < keys.length; i++ ) {
            answers["q" + i + "_" + keys[i]] = form[keys[i]];
        }
        fetch(url + "/signup", {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                signupId: signupId,
                title: title,
                answers: answers,
            })
        }).then(function(response) {
            resolve(true);
        }).catch(function(error) {
            reject(error);
        });
    });
}

module.exports = {
    signUp: signUp
}