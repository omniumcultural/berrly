const events = require('./events.json');
//const main = require('../main')

jest.mock('../berrlyapi');

describe('main', () => {
    test('executeMain', async () => {
        const berrlyapi = require('../berrlyapi');
        berrlyapi.returns["getEvents"].push({promise: () => {return events}});
        console.log("rows here: " + berrlyapi.calls["getEvents"].length)
        //main.main();
    })
})