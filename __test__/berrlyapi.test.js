const sut = require('../berrlyapi');
const fs = require('fs');
const path = require('path');
const { assert } = require('console');

jest.mock('../utils');

describe('berrlyapi', () => {
    test('tryParseTable', async () => {
        expected = `[ { 'Nom complet': 'Àngel Cortadelles i Bacaria',
        'REF': '20210209-2040-368681',
        'Tiquet': 'VOC Sessió 2- Priorat (Cornudella)',
        'E-mail 1': 'acortadelles@gmail.com',
        'Telf - Mòbil': '675788638',
        'Gènere': 'Femení',
        '#': '',
        'Estat': 'SÍ' },
      { 'Nom complet': 'Montserrat Adzerias Saperas',
        'REF': '20210209-2040-368682',
        'Tiquet': 'VOC Sessió 2- Priorat (Cornudella)',
        'E-mail 1': 'cortadz@tinet.cat',
        'Telf - Mòbil': '625178262',
        'Gènere': 'Femení',
        '#': '',
        'Estat': 'SÍ' } ]`

        const utils = require('../utils');

        var print = await fs.readFileSync(path.resolve(__dirname, "./print.html"), "utf8");

        utils.returns["download"].push(new Promise ((resolve, reject) => resolve(print)));

        var event = {
            id_event: 1
        }

        result = await sut.getEventMembers(event);
        
        expect(result[0]["E-mail 1"]).toEqual("acortadelles@gmail.com");
        expect(result[0]["Estat"]).toEqual("SÍ");
        expect(result[0]["Gènere"]).toEqual("Femení");
        expect(result[0]["Nom complet"]).toEqual("Àngel Cortadelles i Bacaria");
        expect(result[0]["REF"]).toEqual("20210209-2040-368681");
        expect(result[0]["Telf - Mòbil"]).toEqual("675788638");
        expect(result[0]["Tiquet"]).toEqual("VOC Sessió 2- Priorat (Cornudella)");
        expect(result[1]["E-mail 1"]).toEqual("cortadz@tinet.cat");
        expect(result[1]["Estat"]).toEqual("SÍ");
        expect(result[1]["Gènere"]).toEqual("Femení");
        expect(result[1]["Nom complet"]).toEqual("Montserrat Adzerias Saperas");
        expect(result[1]["REF"]).toEqual("20210209-2040-368682");
        expect(result[1]["Telf - Mòbil"]).toEqual("625178262");
        expect(result[1]["Tiquet"]).toEqual("VOC Sessió 2- Priorat (Cornudella)");
    })
})