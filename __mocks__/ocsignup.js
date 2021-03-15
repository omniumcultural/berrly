const ocsignupjs = jest.createMockFromModule('ocsignup');

function download (id) {
    ocsignupjs.calls["download"].push([id]);
    return ocsignupjs.returns["download"][ocsignupjs.calls["download"].length - 1];
}

ocsignupjs.download = download;
ocsignupjs.calls = {
    download: []
}
ocsignupjs.returns = {
    download: []
}

module.exports = ocsignupjs;