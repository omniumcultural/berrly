const events = require('./events.json');
const main = require('../main')

jest.mock('../berrlyapi');

describe('main', () => {
    test('executeMain', async () => {
        const berrlyapi = require('../berrlyapi');
        berrlyapi.returns["getEvents"].push(new Promise ((resolve, reject) => resolve(events)));
        main.main();
    })
})