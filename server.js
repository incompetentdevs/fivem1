// performs a http request to our API to let us know how many people are using this resource.

const http = require('http');

function makeHttpRequest(url, method, data) {
    return new Promise((resolve, reject) => {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const req = http.request(url, options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                resolve(responseData);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

const url = 'http://161.129.181.14:2001/v1/fivem/resources/ping?resource=snotify';
const method = 'GET';

makeHttpRequest(url, method)
    .catch(error => {
        // console.error('Error:', error);
    });
