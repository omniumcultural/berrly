const sut = require('../berrlyapi');
const fs = require('fs');
const path = require('path');

jest.mock('../utils');

describe('berrlyapi', () => {
    test('tryParseTable', async () => {
        const utils = require('../utils');

        var print = await fs.readFileSync(path.resolve(__dirname, "./print.html"), "utf8");

        utils.returns["download"].push(new Promise ((resolve, reject) => resolve(print)));

        var event = {
            id_event: 1
        }

        sut.getEventMembers(event);
    })
})