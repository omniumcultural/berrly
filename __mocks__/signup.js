const ocsignup = jest.createMockFromModule('../ocsignup');

function signUp () {
    ocsignup.calls["signUp"].push([]);
    return ocsignup.returns["signUp"][ocsignup.calls["signUp"].length - 1];
}

ocsignup.signUp = signUp;
ocsignup.calls = {
    signUp: []
}
ocsignup.returns = {
    signUp: []
}

module.exports = ocsignup;