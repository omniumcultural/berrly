const utils = jest.createMockFromModule('../utils');

function download (id) {
    utils.calls["download"].push([id]);
    return utils.returns["download"][utils.calls["download"].length - 1];
}

utils.download = download;
utils.calls = {
    download: []
}
utils.returns = {
    download: []
}

module.exports = utils;