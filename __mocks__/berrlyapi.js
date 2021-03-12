const berrlyapi = jest.createMockFromModule('../berrlyapi');

function getEvents () {
    console.log("rows:" + berrlyapi.calls["getEvents"].length);
    return berrlyapi.returns["getEvents"][berrlyapi.calls["getEvents"].length - 1];
}

berrlyapi.getEvents = getEvents;
berrlyapi.calls = {
    getEvents: []
}
berrlyapi.returns = {
    getEvents: []
}

module.exports = berrlyapi;