const exec = require('child_process').exec;
const config = require('./config.json');

function download(id_event) {
    return new Promise(function(resolve, reject) {
        execute("curl 'https://app.berrly.com/events/members/print/" + id_event + "' -H 'User-Agent: Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Accept-Language: ca,en-US;q=0.7,en;q=0.3' --compressed -H 'Origin: https://app.berrly.com' -H 'Connection: keep-alive' -H 'Referer: https://app.berrly.com/events/external-members/4641' -H 'Cookie: _ga=GA1.2.76033249.1603817757; __hstc=63588272.5a32eebb31dcf293063afa987424ec1e.1603817821319.1603817821319.1603817821319.1; hubspotutk=5a32eebb31dcf293063afa987424ec1e; __hs_opt_out=no; _gid=GA1.2.784321659.1615539439; _fbp=fb.1.1615539438680.488603197; XSRF-TOKEN=eyJpdiI6IkxIZmFXQVY0dHorMzhKMXZUSnBvakE9PSIsInZhbHVlIjoiT3psVWZ3azh0WDd1NTRHelVxalY5VU1jNlZ5S1pQazVDM200NUlvY2VzSzEzaEZ2SWZyR0VXcHJ3a2s4UkRFbSIsIm1hYyI6IjNjNzNlYzExMTJmY2YyZmE5NmYyMDA2NjdmNjI1MThkZmVjYWVkN2IyOGEwMGEwNDMxZDI4NTc3ZjA1OTE2NzMifQ%3D%3D; laravel_session=eyJpdiI6IjZhODVFVXV2SG0xNmp1SzMxSHRWcFE9PSIsInZhbHVlIjoiMWM2SDVXMWRlZnBkcUNhUnJqZ01mYlhlZldldUdIUmhXc2dsZERQbUx2Y1FWeGlDNStIQzE3S0xZXC9CM2c1YWsiLCJtYWMiOiIwMzcwMTkwNTY3NTM5OTQwY2U5YzY4YzE4OTUwM2U4ODA4ZTg4OTcyZjM5MTUxMDE3OTkxNWUxMmU2YjI2YTJkIn0%3D' --data '_token=" + config._token + "'", (data) => resolve(data));
    });
}


function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

module.exports = {
    download: download
}