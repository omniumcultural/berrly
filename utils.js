const exec = require('child_process').exec;
const config = require('./config.json');

function download(id_event) {
    return new Promise(function(resolve, reject) {
        execute("curl 'https://app.berrly.com/events/members/print/" + id_event + "' -H 'User-Agent: Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Accept-Language: ca,en-US;q=0.7,en;q=0.3' --compressed -H 'Content-Type: multipart/form-data; boundary=---------------------------132529773635865586194260247686' -H 'Origin: https://app.berrly.com' -H 'Connection: keep-alive' -H 'Referer: https://app.berrly.com/events/external-members/" + id_event + "' -H 'Cookie: _ga=GA1.2.76033249.1603817757; __hstc=63588272.5a32eebb31dcf293063afa987424ec1e.1603817821319.1603817821319.1615892308571.2; hubspotutk=5a32eebb31dcf293063afa987424ec1e; __hs_opt_out=no; _fbp=fb.1.1615539438680.488603197; _gid=GA1.2.490709660.1615892308; __hssrc=1; __hssc=63588272.1.1615892308571; XSRF-TOKEN=eyJpdiI6Ind6aU5JMHZ1Q1wvV0Rya0pCKzRwVUN3PT0iLCJ2YWx1ZSI6Ijd5YmRCZm1qbGhjNXNJajVCT1Q2bjRSaXVWYk1ieEpoTk1ONW5KdWlQTTdublVjQ0FrWGVzZXdiYzRwNHY0dUkiLCJtYWMiOiJlNTc1OTA4YzY0YzU3OWIwNDQzOWIwNmVmZTUzZjdjMDUyZDgzNDBhYzE2NTU3MWYyZDE1MTFmNzk4ZDEzNjIwIn0%3D; laravel_session=eyJpdiI6IjlTR1p6QnRHNUZvQVE5b0hSQkdyT3c9PSIsInZhbHVlIjoiNjE3cDhTcWt3WFFKSG5INmJpRTBFZko4VU9Xd2lqcUNXcFdwSWdhdVwvWFByNmtQOEo5XC9hQ1lGUjd5RzNmdll5IiwibWFjIjoiOGExNWExYzdmNDExZjYzZWFiM2ZiYjFmODBhZGFmYTY4NzY3ODM0ODM1ZmEyN2I3MjZjMDU5YjdiMWE4MTQ2OCJ9; _gat_UA-69149008-2=1' -H 'Upgrade-Insecure-Requests: 1' -H 'TE: Trailers' --data-binary $'-----------------------------132529773635865586194260247686\r\nContent-Disposition: form-data; name=\"_token\"\r\n\r\nR2E5SlljPYuYBYV8Nl922EYMOGrgXBQqBk0pJzfy\r\n-----------------------------132529773635865586194260247686--\r\n'", (data) => resolve(data));
    });
}


function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

module.exports = {
    download: download
}